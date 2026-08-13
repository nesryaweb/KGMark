import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Header() {
  return (
    <TableHeader>
      {/* Top header: student column, CHIBT group (9 cols), English group (3 cols) */}
      <TableRow className="border-0">
        <TableHead
          rowSpan={2}
          className="text-center border-r-2 border-gray-900 min-w-50"
        >
          Student
        </TableHead>

        <TableHead
          colSpan={9}
          className="text-center border-r-2 border-gray-900"
        >
          Chibt
        </TableHead>

        <TableHead
          colSpan={3}
          className="text-center border-r-2 border-gray-900"
        >
          English
        </TableHead>
      </TableRow>

      {/* Second header row: individual column labels for CHIBT and English */}
      <TableRow className="border-0">
        <TableHead className="text-center">Theme 1</TableHead>
        <TableHead className="text-center">Theme 2</TableHead>
        <TableHead className="text-center">Theme 3</TableHead>
        <TableHead className="text-center bg-gray-900">1st Sem</TableHead>
        <TableHead className="text-center">Theme 4</TableHead>
        <TableHead className="text-center">Theme 5</TableHead>
        <TableHead className="text-center">Theme 6</TableHead>
        <TableHead className="text-center bg-gray-900">2nd Sem</TableHead>
        <TableHead className="text-center bg-gray-800">Year</TableHead>
        <TableHead className="text-center bg-gray-900">1st Sem</TableHead>
        <TableHead className="text-center bg-gray-900">2nd Sem</TableHead>
        <TableHead className="text-center bg-gray-800">Year</TableHead>
      </TableRow>
    </TableHeader>
  );
}
