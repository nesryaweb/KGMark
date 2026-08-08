import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

export default function ShowMarks() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <main className="flex flex-col items-center justify-center gap-4 p-8 w-2/3 bg-slate-900 rounded-lg h-screen  ">
        <Button
          variant="ghost"
          className="cursor-pointer text-slate-400 hover:text-slate-200"
        >
          <Link href="/">← Back</Link>
        </Button>

        <Card className="w-full p-8 overflow-auto">
          <h1 className="text-2xl font-bold text-white">CHIBT MARKS</h1>

          <Separator />
          <div className="w-full overflow-x-auto">
            <Table className="min-w-225 overflow-x-auto">
              <TableHeader>
                <TableRow className="border-0">
                  <TableHead rowSpan={2} className="text-center min-w-72">
                    Students
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 1
                  </TableHead>

                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 2
                  </TableHead>

                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 3
                  </TableHead>

                  <TableHead className="text-center border-r border-gray-8 bg-gray-900">
                    FSA
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 4
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 5
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-center border-r border-gray-8"
                  >
                    Theme 6
                  </TableHead>
                  <TableHead className="text-center border-r border-gray-8 bg-gray-900">
                    SSA
                  </TableHead>
                  <TableHead className="text-center border-r border-gray-8 bg-gray-800">
                    YA
                  </TableHead>
                </TableRow>
                <TableRow className="border-0">
                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>

                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>

                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>

                  <TableHead className="border-r border-gray-8 text-right bg-gray-900">
                    %
                  </TableHead>

                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>
                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>
                  <TableHead className="text-right">Mark</TableHead>

                  <TableHead className="border-r border-gray-8 text-right">
                    %
                  </TableHead>
                  <TableHead className="border-r border-gray-8 text-right bg-gray-900">
                    %
                  </TableHead>
                  <TableHead className="border-r border-gray-8 text-right bg-gray-800">
                    %
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow className="border-0 overflow-x-auto">
                  <TableCell className="min-w-72">Abebe Kebede</TableCell>

                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20 bg-gray-900">
                    24%
                  </TableCell>
                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right min-w-20">24</TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20">
                    24%
                  </TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20 bg-gray-900">
                    24%
                  </TableCell>
                  <TableCell className="text-right border-r border-gray-8 min-w-20 bg-gray-800">
                    24%
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </main>
    </div>
  );
}
