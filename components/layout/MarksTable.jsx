"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MarksTable({
  students,
  marks,
  setMarks,
  fullMark,
}) {
  return (
     <Table>
            <TableHeader>
              <TableRow className="border-0">
                <TableHead>Student Name</TableHead>
                <TableHead className="text-right">Mark</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {students.map((student) => (
                <TableRow className="border-0" key={student.id}>
                  <TableCell>{student.name}</TableCell>

                  <TableCell className="text-right">
                    <Input
                      type="number"
                      min="0"
                      className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                      value={marks[student.id] ?? 0}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        setMarks((prevMarks) => ({
                          ...prevMarks,
                          [student.id]: value,
                        }));
                      }}
                      max={fullMark}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  );
}   