import Flex from "@design/Flex";
import Button from "@design/Button";
import Typography from "@design/Typography";
import Link from "next/link";

const HomePageContainer = () => {
  return (
    <Flex
      vertical
      className="justify-start items-center w-full h-full pt-[100px] gap-[40px]"
    >
      <Typography>HI ! I&apos;m Matin Vilan. A Frontend developer</Typography>
      <Flex vertical className="max-w-[50%] gap-4">
        <Typography variant="title" className="text-center">
          This is a project to check my capabilities for employment in ASAFES
          company.
        </Typography>
        <Typography variant="normal" className="text-center">
          In this project, all the attached items in the Technical Test file
          have been tried.
        </Typography>
        <Typography variant="description" className="text-center">
          Also, in the readme of the project, the descriptions of all the tasks
          are given
        </Typography>
      </Flex>
      <Typography variant="description" className="text-red-400">
        To log in manually (without logging in with GitHub), you must enter the
        username <b>Matin</b> and the password <b>123456</b>.
      </Typography>
      <Link href="/dashboard/posts">
        <Button>GO TO DASHBOARD</Button>
      </Link>
    </Flex>
  );
};

export default HomePageContainer;
