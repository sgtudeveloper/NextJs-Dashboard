import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { use } from "react";

async function fetchData() {
  const res = await fetch("https://api.igcsm.online/api/contact");
  const data = await res.json();
  return data;
}

const Table1 = ({ data }) => {
  return (
    <Table>
      <TableCaption>A list of your Enquiry.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Enquiry No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>College</TableHead>
          <TableHead className="text-right">Contact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((item) => (
            <TableRow key={item.inquiryNo}>
              <TableCell className="font-medium">{item.inquiryNo}</TableCell>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.emailAddress}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.collegeName}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

const Page = () => {
  const data = use(fetchData());

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  return <Table1 data={data} />;
};

export default Page;