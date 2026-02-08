# 实用命令

## 将一个视频转换为指定分辨率，其他参数不变

```
ffmpeg -i <原视频文件名> -vf "scale=宽:高" -crf 23 -c:a copy <新视频文件名>
```

如果需要固定码率，可以执行以下命令

```
ffprobe -v error -select_streams v:0 -show_entries stream=bit_rate,r_frame_rate -of default=noprint_wrappers=1:nokey=1 <原视频文件名>
```

得到视频的帧率和码率。第一行是码率（可能是一个估算值，例如 4985678），第二行是帧率（例如 30/1）。

然后，执行以下命令，执行前按刚才获取到的信息替换对应参数：

```
ffmpeg -i input.mp4 -vf "scale=3840:2160:flags=lanczos" -r <帧率> -b:v <码率，例如5M，500K> -c:a copy output_4k.mp4
```

## 将mka文件中的指定音轨提取为flac文件

```
# 将第x条音轨转换为FLAC
ffmpeg -i <输入文件名.mka> -map 0:a:<x-1> -c:a flac <输出文件名.flac>
```
