export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <table id="wd-publish-buttons">
        <tr>
          <td>
            <button id="wd-unpublish" type="button">
              Unpublish
            </button>
          </td>
          <td>
            <button id="wd-publish" type="button">
              Publish
            </button>
          </td>
        </tr>
      </table>
      <p></p>
      <table id="wd-buttons">
        <tr>
          <td>
            <div>
              <button id="wd-import-existing" type="button">
                Import Existing Content
              </button>
            </div>
            <div>
              <button id="wd-import-commons" type="button">
                Import from Commons
              </button>
            </div>
            <div>
              <button id="wd-choose-home" type="button">
                Choose Home Page
              </button>
            </div>
            <div>
              <button id="wd-view-stream" type="button">
                View Course Stream
              </button>
            </div>
            <div>
              <button id="wd-new-announcement" type="button">
                New Announcement
              </button>
            </div>
            <div>
              <button id="wd-new-analytics" type="button">
                New Analytics
              </button>
            </div>
            <div>
              <button id="wd-view-notification" type="button">
                View Course Notifications
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
