import CreateHomework from "../../components/Teacher/CreateHomework/CreateHomework";
import SideNav from "../../components/Teacher/Sidenav/Sidenav";

function DashboardTeacher() {
  return (
    <>
      <div className="fixed">
        <SideNav />
      </div>
      <div className="ml-28">
        <CreateHomework />
      </div>
    </>
  );
}

export default DashboardTeacher;
