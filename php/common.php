<?php
final class Common
{

    /**
     * 统计文件总数
     */
    public static function countRun($file_dir)
    {
        $count = 0;

        if (is_dir($file_dir)) {
            $dir_arr = scandir($file_dir);
            if ($dir_arr) {
                $count = count($dir_arr) - 2;
            }
            unset($dir_arr);
        }
        return $count;
    }

    /**
     * 程序运行时间计算
     */
    public static function runTime()
    {
        global $RUN_START;
        $RUN_START = microtime();
    }


    /**
     * 遍历目录树
     */
    public static function tree($dir, $level=1)
    {
        $fh=opendir($dir);//打开目录
        
        while ($dirname=readdir($fh)) {//循环读取当前目录下的子目录及文件
            if ($dirname == '.' || $dirname == '..') {
                continue;
            }
        
            echo "|".str_repeat('-', $level).$dirname;//目录名或文件名,str_repeat("|-",$num);//把字符串重复指定的次数
            echo '<br>';
            if (is_dir($dir. '/' .$dirname)) {//如果是目录,则递归调用
        
                self::tree($dir. '/' .$dirname, $level+1);
            }
        }
    }

    /**
     * 遍历所有目录
     */
    public static function treeArr($dir, $arr)
    {
        if (is_dir($dir)) {
            $fh=opendir($dir);
        
            while ($dirname=readdir($fh)) {
                if ($dirname == '.' || $dirname == '..') {
                    continue;
                }

                if (is_dir($dir. '/' .$dirname)) { 
                    self::treeArr($dir. '/' .$dirname, $arr[$dirname]);
                }else{
                    $arr[] = $dirname;    
                }
            }
            closedir($dir);
        }
    }

    public static function searchDir($path,&$files){

        if(is_dir($path)){
    
            $opendir = opendir($path);
    
            while ($file = readdir($opendir)){
                if($file == '.' || $file == '..'){
                    continue;    
                }

                if(!is_dir($path. '/' .$file)){
                    $files[] = $file;
                }else{
                    self::searchDir($path.'/'.$file, $files[$file]); 
                }
            }
            closedir($opendir);
        }
        
    }
    /**
     * 遍历所有目录
     */
    public static function getDir($dir){
        $files = array();
        self::searchDir($dir, $files);
        return $files;
    }
  

    /**
     * 获取当目录所有文件
     */
    public static function currentDir($dir, $distinct = true)
    {
        $result = [];
        if (is_dir($dir)) {
            $dir_handle = opendir($dir);
            while ($file=readdir($dir_handle)) {
                if ($distinct) {
                    if ($file=='.'||$file=='..') {
                        continue;
                    }
                }
                $dir_file = $dir . '/' . $file;
                $type = filetype($dir_file);

                if ($type=='dir') {
                    $extension = '';
                } else {
                    $extension = pathinfo($dir_file)['extension'];
                }
                $result[] = [
                        'name' => $file,
                        'type' => $type,
                        'size' => filesize($dir_file),
                        'ctime' => date('Y-m-d H:i:s', filectime($dir_file)),
                        'mtime' => date('Y-m-d H:i:s', filemtime($dir_file)),
                        'extension' => $extension,
                        'dir' => $dir_file,
                    ];

                $sort_name[] = $file;
                $sort_type[] = $type;
                $sort_ctime[] = date('Y-m-d H:i:s', filectime($dir_file));
            }
            closedir($dir_handle);
            
            if (!empty($result)) {
                array_multisort($sort_type, $sort_name, $result);
            }
        }
        return $result;
    }
}
