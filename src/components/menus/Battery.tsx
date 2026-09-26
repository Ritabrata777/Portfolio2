export default function Battery() {
  const batteryState = useBattery();
  const isReady = batteryState.isSupported && batteryState.fetched;
  const level = isReady ? batteryState.level : 0;

  const formatBatteryTime = (seconds: number): string | null => {
    if (!Number.isFinite(seconds) || seconds <= 0) return null;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round((seconds % 3600) / 60);

    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const detail = () => {
    if (!batteryState.isSupported) return batteryState.reason || "Battery API unavailable";
    if (!batteryState.fetched) return "Loading battery status";
    if (batteryState.charging) {
      const untilFull = formatBatteryTime(batteryState.chargingTime);
      return untilFull ? `Charging - ${untilFull} until full` : "Charging";
    }

    const remaining = formatBatteryTime(batteryState.dischargingTime);
    return remaining ? `${remaining} remaining` : "On battery";
  };

  const width = () => {
    return 0.1 + level * 0.96;
  };

  const color = () => {
    if (!isReady) return "bg-gray-400/60";
    if (batteryState.charging) return "bg-green-400";

    if (level < 0.2) return "bg-red-500";
    else if (level < 0.5) return "bg-yellow-500";
    else return "bg-white";
  };

  return (
    <div
      className="hstack space-x-2"
      title={isReady ? `${(level * 100).toFixed()}% - ${detail()}` : detail()}
    >
      <span text-xs>{isReady ? `${(level * 100).toFixed()}%` : "N/A"}</span>
      <div className="relative hstack">
        <span className="i-bi:battery text-2xl" />
        <div className={`battery-level ${color()}`} style={{ width: `${width()}rem` }} />
        {isReady && batteryState.charging && (
          <span className="i-bi:lightning-charge-fill absolute inset-0 m-auto -translate-x-0.5 text-xs" />
        )}
      </div>
    </div>
  );
}
