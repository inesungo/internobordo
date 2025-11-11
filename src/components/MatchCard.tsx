import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  category: "Masculino" | "Femenino";
  status?: "Finalizado" | "En vivo" | "Próximo";
}

const MatchCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
  time,
  category,
  status = "Próximo",
}: MatchCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <Badge variant={category === "Masculino" ? "default" : "secondary"}>
          {category}
        </Badge>
        <Badge
          variant={
            status === "En vivo"
              ? "destructive"
              : status === "Finalizado"
              ? "outline"
              : "secondary"
          }
        >
          {status}
        </Badge>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <p className="font-bold text-lg text-foreground">{homeTeam}</p>
        </div>

        <div className="flex items-center gap-3">
          {homeScore !== undefined && awayScore !== undefined ? (
            <>
              <div className="text-3xl font-bold text-primary">{homeScore}</div>
              <div className="text-2xl text-muted-foreground">-</div>
              <div className="text-3xl font-bold text-primary">{awayScore}</div>
            </>
          ) : (
            <div className="text-lg font-medium text-muted-foreground">vs</div>
          )}
        </div>

        <div className="flex-1 text-center">
          <p className="font-bold text-lg text-foreground">{awayTeam}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          {date} - {time}
        </p>
      </div>
    </Card>
  );
};

export default MatchCard;
