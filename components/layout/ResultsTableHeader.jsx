import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Header() {
  return (
    <TableHeader>
      {/* Main header */}
      <TableRow className="border-0">
        <TableHead
          rowSpan={2}
          className="text-center border-r border-gray-800 min-w-50"
        >
          Student
        </TableHead>

        {/* CHIBT */}
        <TableHead colSpan={9} className="text-center border-r border-gray-800">
          Chibt
        </TableHead>

        {/* ENGLISH */}
        <TableHead colSpan={3} className="text-center border-r border-gray-800">
          English
        </TableHead>
      </TableRow>

      {/* Sub header */}
      <TableRow className="border-0">
        {/* Chibt Theme 1 */}
        <TableHead className="text-center">Theme 1</TableHead>

        {/* Theme 2 */}
        <TableHead className="text-center">Theme 2</TableHead>

        {/* Theme 3 */}
        <TableHead className="text-center">Theme 3</TableHead>

        {/* Semester 1 */}
        <TableHead className="text-center bg-gray-900">1st Sem</TableHead>

        {/* Theme 4 */}
        <TableHead className="text-center">Theme 4</TableHead>

        {/* Theme 5 */}
        <TableHead className="text-center">Theme 5</TableHead>

        {/* Theme 6 */}
        <TableHead className="text-center">Theme 6</TableHead>

        {/* Semester 2 */}
        <TableHead className="text-center bg-gray-900">2nd Sem</TableHead>

        {/* Yearly */}
        <TableHead className="text-center bg-gray-800">Year</TableHead>

        {/* English Semester 1 */}
        <TableHead className="text-center bg-gray-900">1st Sem</TableHead>

        {/* English Semester 2 */}
        <TableHead className="text-center bg-gray-900">2nd Sem</TableHead>

        {/* English Year */}
        <TableHead className="text-center bg-gray-800">Year</TableHead>
      </TableRow>
    </TableHeader>
  );
}
