import { _Counters, _UnmarshalledCounters } from "./_Counters";
import { _Device, _UnmarshalledDevice } from "./_Device";
import { _DeviceMinutes, _UnmarshalledDeviceMinutes } from "./_DeviceMinutes";

/**
 * <p>Represents a device.</p>
 */
export interface _Job {
  /**
   * <p>The job's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The job's name.</p>
   */
  name?: string;

  /**
   * <p>The job's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ: The built-in fuzz type.</p> </li> <li> <p>BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT: The Appium Java JUnit type.</p> </li> <li> <p>APPIUM_JAVA_TESTNG: The Appium Java TestNG type.</p> </li> <li> <p>APPIUM_PYTHON: The Appium Python type.</p> </li> <li> <p>APPIUM_NODE: The Appium Node.js type.</p> </li> <li> <p>APPIUM_RUBY: The Appium Ruby type.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.</p> </li> <li> <p>APPIUM_WEB_PYTHON: The Appium Python type for web apps.</p> </li> <li> <p>APPIUM_WEB_NODE: The Appium Node.js type for web apps.</p> </li> <li> <p>APPIUM_WEB_RUBY: The Appium Ruby test type for web apps.</p> </li> <li> <p>CALABASH: The Calabash type.</p> </li> <li> <p>INSTRUMENTATION: The Instrumentation type.</p> </li> <li> <p>UIAUTOMATION: The uiautomation type.</p> </li> <li> <p>UIAUTOMATOR: The uiautomator type.</p> </li> <li> <p>XCTEST: The Xcode test type.</p> </li> <li> <p>XCTEST_UI: The Xcode UI test type.</p> </li> </ul>
   */
  type?:
    | "BUILTIN_FUZZ"
    | "BUILTIN_EXPLORER"
    | "WEB_PERFORMANCE_PROFILE"
    | "APPIUM_JAVA_JUNIT"
    | "APPIUM_JAVA_TESTNG"
    | "APPIUM_PYTHON"
    | "APPIUM_NODE"
    | "APPIUM_RUBY"
    | "APPIUM_WEB_JAVA_JUNIT"
    | "APPIUM_WEB_JAVA_TESTNG"
    | "APPIUM_WEB_PYTHON"
    | "APPIUM_WEB_NODE"
    | "APPIUM_WEB_RUBY"
    | "CALABASH"
    | "INSTRUMENTATION"
    | "UIAUTOMATION"
    | "UIAUTOMATOR"
    | "XCTEST"
    | "XCTEST_UI"
    | "REMOTE_ACCESS_RECORD"
    | "REMOTE_ACCESS_REPLAY"
    | string;

  /**
   * <p>When the job was created.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The job's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending status.</p> </li> <li> <p>PENDING_CONCURRENCY: A pending concurrency status.</p> </li> <li> <p>PENDING_DEVICE: A pending device status.</p> </li> <li> <p>PROCESSING: A processing status.</p> </li> <li> <p>SCHEDULING: A scheduling status.</p> </li> <li> <p>PREPARING: A preparing status.</p> </li> <li> <p>RUNNING: A running status.</p> </li> <li> <p>COMPLETED: A completed status.</p> </li> <li> <p>STOPPING: A stopping status.</p> </li> </ul>
   */
  status?:
    | "PENDING"
    | "PENDING_CONCURRENCY"
    | "PENDING_DEVICE"
    | "PROCESSING"
    | "SCHEDULING"
    | "PREPARING"
    | "RUNNING"
    | "COMPLETED"
    | "STOPPING"
    | string;

  /**
   * <p>The job's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>
   */
  result?:
    | "PENDING"
    | "PASSED"
    | "WARNED"
    | "FAILED"
    | "SKIPPED"
    | "ERRORED"
    | "STOPPED"
    | string;

  /**
   * <p>The job's start time.</p>
   */
  started?: Date | string | number;

  /**
   * <p>The job's stop time.</p>
   */
  stopped?: Date | string | number;

  /**
   * <p>The job's result counters.</p>
   */
  counters?: _Counters;

  /**
   * <p>A message about the job's result.</p>
   */
  message?: string;

  /**
   * <p>The device (phone or tablet).</p>
   */
  device?: _Device;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the job.</p>
   */
  deviceMinutes?: _DeviceMinutes;

  /**
   * <p>The endpoint for streaming device video.</p>
   */
  videoEndpoint?: string;

  /**
   * <p>This value is set to true if video capture is enabled; otherwise, it is set to false.</p>
   */
  videoCapture?: boolean;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * <p>When the job was created.</p>
   */
  created?: Date;

  /**
   * <p>The job's start time.</p>
   */
  started?: Date;

  /**
   * <p>The job's stop time.</p>
   */
  stopped?: Date;

  /**
   * <p>The job's result counters.</p>
   */
  counters?: _UnmarshalledCounters;

  /**
   * <p>The device (phone or tablet).</p>
   */
  device?: _UnmarshalledDevice;

  /**
   * <p>Represents the total (metered or unmetered) minutes used by the job.</p>
   */
  deviceMinutes?: _UnmarshalledDeviceMinutes;
}
