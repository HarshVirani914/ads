$link = $args[0]

$date = Get-Date

$time = $date.AddMinutes(1)

$timeString = $time.ToString("HH:mm")

$trigger = New-ScheduledTaskTrigger -Daily -At $timeString

$action = New-ScheduledTaskAction -Execute "C:\Program Files\Google\Chrome\Application\chrome.exe" -Argument $link

Register-ScheduledTask -TaskName "Open link" -Trigger $trigger -Action $action -RunLevel Highest

[Environment]::Exit(1)