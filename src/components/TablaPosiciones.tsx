import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Standing } from '@/lib/types';

interface TablaPosicionesProps {
  standings: Standing[];
}

export default function TablaPosiciones({ standings }: TablaPosicionesProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Pos</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead className="text-center">PJ</TableHead>
            <TableHead className="text-center">PG</TableHead>
            <TableHead className="text-center">PE</TableHead>
            <TableHead className="text-center">PP</TableHead>
            <TableHead className="text-center">GF</TableHead>
            <TableHead className="text-center">GC</TableHead>
            <TableHead className="text-center">DG</TableHead>
            <TableHead className="text-center font-bold">PTS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {standings.map((team, index) => (
            <TableRow key={team.equipo_id} className="hover:bg-muted/50">
              <TableCell className="font-bold text-primary">{index + 1}</TableCell>
              <TableCell className="font-semibold">{team.nombre}</TableCell>
              <TableCell className="text-center">{team.PJ}</TableCell>
              <TableCell className="text-center">{team.PG}</TableCell>
              <TableCell className="text-center">{team.PE}</TableCell>
              <TableCell className="text-center">{team.PP}</TableCell>
              <TableCell className="text-center">{team.GF}</TableCell>
              <TableCell className="text-center">{team.GC}</TableCell>
              <TableCell className="text-center">{team.DG > 0 ? `+${team.DG}` : team.DG}</TableCell>
              <TableCell className="text-center font-bold text-primary">{team.Pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


