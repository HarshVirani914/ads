# $1
# TASKKILL /F /IM $2
# Start-Process -FilePath Edge -ArgumentList '--new-window ' + $3
# [Environment]::Exit(1)

$startDate = Get-Date
$endDate = (Get-Date).AddDays(1)

$htmlFilePath = "C:\path\to\your\html\file.html"

while ($startDate -lt $endDate) {
    
    $jobName = "ScheduledJob_$startDate"

    $jobTrigger = New-ScheduledTaskTrigger -Once -At $startDate 
    
    $jobAction = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "/c start $htmlFilePath"

    Register-ScheduledTask -TaskName "$jobName-$startDate" -Trigger $jobTrigger -Action $jobAction

    $interval = Get-Random -Minimum 10 -Maximum 20

    $startDate = $startDate.AddMinutes($interval)
}

[Environment]::Exit(1)

sshpass -p 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P' ssh Administrator@ec2-54-193-62-110.us-west-1.compute.amazonaws.com

powershell

$date = Get-Date

$time = $date.AddMinutes(2)

$timeString = $time.ToString("HH:mm")


$trigger = New-ScheduledTaskTrigger -Daily -At $timeString

$action = New-ScheduledTaskAction -Execute "C:\Program Files\Google\Chrome\Application\chrome.exe https://www.youtube.com/live/SVEnrJnMBjk?feature=share"

Register-ScheduledTask -TaskName "Open Chrome test" -Trigger $trigger -Action $action -RunLevel Highest

[Environment]::Exit(1)

######################################

powershell -command "$date = Get-Date

$time = $date.AddMinutes(2)

$timeString = $time.ToString("HH:mm")

$trigger = New-ScheduledTaskTrigger -Daily -At $timeString

$action = New-ScheduledTaskAction -Execute "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe https://www.youtube.com/live/SVEnrJnMBjk?feature=share"

Register-ScheduledTask -TaskName "Open Chrome test" -Trigger $trigger -Action $action -RunLevel Highest

[Environment]::Exit(1)
