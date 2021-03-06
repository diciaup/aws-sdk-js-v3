/**
 * <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>
 */
export interface _PerformanceMetrics {
  /**
   * _PerformanceMetricsProperties shape
   */
  Properties?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledPerformanceMetrics extends _PerformanceMetrics {
  /**
   * _PerformanceMetricsProperties shape
   */
  Properties?: { [key: string]: string };
}
