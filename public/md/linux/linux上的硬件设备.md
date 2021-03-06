# 各硬件设备在Linux中的文件名

在Linux系统中,每个设备都被当成一个文件来对待.

所有的硬件设备文件都在/dev这个目录下.

IDE硬盘 /dev/hd[a-d]

SCSI/SATA/USB硬盘 /dev/sd[a-p]

U盘 /dev/sd[a-p] 与SATA相同

软驱 /dev/fd[0-1]

打印机 25针:/dev/lp[0-2] USB:/dev/usb/lp[0-15]

鼠标 USB:/dev/usb/mouse[0-15] PS2:/dev/psaux

当前CD ROM/DVD ROM /dev/cdrom

当前鼠标 /dev/mouse

磁带机 IDE:/dev/ht0 SCSI:/dev/st0

需要注意硬盘(IDE,SCSI,USB都一样),每个磁盘驱动器的磁盘分区(partition)不同时,其磁盘文件名还会改变.

磁盘链接的方式与设备文件名的关系

现在个人计算机的磁盘接口有两种,分别是IDE和SATA接口,目前主流是SATA接口.

## 磁盘的组成

盘片上面又可细分出扇区与柱面两种单位,其中每个扇区有512bytes.磁盘第一扇区记录两个重要的信息分别是:主引导分区MBR,446bytes,分区表记录整块硬盘分区的状态,64bytes.

分区表只有64bytes只能容纳四个分区,主分区Primary和扩展分区Extended,分区的最小单位是柱面cylinder.

## 硬盘分区

主分区和扩展分区最多可以有四个[分区表64bytes大小限制]

扩展分区最多只能有一个

逻辑分区是有扩展分区持续切割出来的分区

能被格式化后作为数据访问的分区为主分区与逻辑分区,[扩展分区的目的是使用额外的扇区来记录分区信息,不能被格式化]

逻辑分区的数量依系统而不同,在linux系统中,IDE硬盘最多有59个逻辑分区(5号到63号),SATA硬盘则有11个逻辑分区(5号到15号)

## 电脑开机流程与主引导分区(MBR)

BIOS,开机时第一个启动的程序

CMOS,记录各项硬件参数且嵌入在主板上面的存储器

BIOS会根据用户设置去取得能够开机的硬盘,并到该硬盘第一个扇区的主引导分区MBR位置,MBR这里会放置最基本的引导加载程序.这个引导加载程序的目的是加载load内核文件.

完整的开机流程:

1 BIOS,先启动主板程序

2 MBR,硬盘主引导分区启动

3 引导加载程序,boot loader,一支可读取内核文件来执行的软件

4 内核文件,开始操作系统的功能

引导加载程序boot loader,是安装在MBR上,MBR只有466bytes大,这个引导加载程序小.

## boot loader的主要任务

提供菜单,用户可选菜单启动

载入内核文件,直接指向可开机的程序区

转交其他loader,将引导加载功能转交给其他loader负责.MBR内可以放置多个loader

引导加载程序除了可以按装在MBR外,还可以安装在每个分区的引导扇区,实现多重引导.这可以实现安装linux和window系统.

安装双系统最好先安装windows 再安装linux,因为windows会覆盖MBR.