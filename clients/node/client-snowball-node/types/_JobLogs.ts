/**
 * <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p>
 */
export interface _JobLogs {
  /**
   * <p>A link to an Amazon S3 presigned URL where the job completion report is located.</p>
   */
  JobCompletionReportURI?: string;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job success log is located.</p>
   */
  JobSuccessLogURI?: string;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job failure log is located.</p>
   */
  JobFailureLogURI?: string;
}

export type _UnmarshalledJobLogs = _JobLogs;
