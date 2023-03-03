import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 10,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color,
  },
}));

export function ProgressBarsAttack(props: any) {
  const MIN = 0;
  const MAX = 200;
  const value = props.attack;
  const normalise = ((value - MIN) * 100) / (MAX - MIN);
  return (
    <BorderLinearProgress
      variant="determinate"
      value={normalise}
      color="error"
    />
  );
}

export function ProgressBarsDefense(props: any) {
  const value = props.defense;
  const MIN = 0;
  const MAX = 200;
  const normalise = ((value - MIN) * 100) / (MAX - MIN);
  return (
    <BorderLinearProgress
      variant="determinate"
      value={normalise}
      color="primary"
    />
  );
}
export function ProgressBarsSpeed(props: any) {
  const MIN = 0;
  const MAX = 200;
  const value = props.speed;
  const normalise = ((value - MIN) * 100) / (MAX - MIN);
  return (
    <BorderLinearProgress
      variant="determinate"
      value={normalise}
      color="warning"
    />
  );
}
export function ProgressBarsHeigth(props: any) {
  const value = props.heigth;
  const MIN = 0;
  const MAX = 200;
  const normalise = ((value - MIN) * 100) / (MAX - MIN);
  return (
    <BorderLinearProgress
      variant="determinate"
      value={normalise}
      color="secondary"
    />
  );
}
export function ProgressBarsLife(props: any) {
  const value = props.life;
  const MIN = 0;
  const MAX = 200;
  const normalise = ((value - MIN) * 100) / (MAX - MIN);
  return (
    <BorderLinearProgress
      variant="determinate"
      value={normalise}
      color="success"
    />
  );
}
