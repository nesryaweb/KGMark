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

export default function AddMarks() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <main className="flex flex-col items-center justify-center gap-4 p-8 w-2/3 bg-slate-900 rounded-lg h-screen  ">
        <Button
          variant="ghost"
          className="cursor-pointer text-slate-400 hover:text-slate-200"
        >
          <Link href="/">← Back</Link>
        </Button>
        <h2 className="text-muted-foreground">
          Record marks for an evaluation
        </h2>
        <Card className="w-full p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-white">Chibt Mark</h1>
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <Label>Evaluation</Label>

              <Select>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select evaluation" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Theme 1">Theme 1</SelectItem>

                  <SelectItem value="Theme 2">Theme 2</SelectItem>

                  <SelectItem value="Theme 3">Theme 3</SelectItem>

                  <SelectItem value="Theme 4">Theme 4</SelectItem>

                  <SelectItem value="Theme 5">Theme 5</SelectItem>

                  <SelectItem value="Theme 6">Theme 6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 items-baseline-last">
              <div className="space-y-2">
                <Label> Full Mark </Label>
                <Input placeholder="Enter full mark" />
              </div>
              <div className="space-y-2 flex gap-4 items-center">
                <Label> Fill marks automatically </Label>
                <Checkbox />
              </div>
            </div>
          </div>
          <Separator />

          <Table>
            <TableHeader>
              <TableRow className="border-0">
                <TableHead>Student Name</TableHead>
                <TableHead className="text-right">Mark</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="border-0">
                <TableCell>Abebe Kebede</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Jonson Cle</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto "
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Billw Chor</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Abebe Kebede</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Jonson Cle</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Billw Chor</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Abebe Kebede</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Jonson Cle</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto "
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Billw Chor</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Abebe Kebede</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Jonson Cle</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>Billw Chor</TableCell>

                <TableCell className="text-right">
                  <Input
                    type="number"
                    min="0"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none max-w-24 ml-auto"
                    // max={fullMark}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Separator />
          <Button
            size="lg"
            className="h-11 px-8 text-slate-900 cursor-pointer font-bold rounded-full"
          >
            <Link href="/add-marks">Save Marks</Link>
          </Button>
        </Card>
      </main>
    </div>
  );
}
