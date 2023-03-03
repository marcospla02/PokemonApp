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
  const value = props.attack;
  return (
    <BorderLinearProgress variant="determinate" value={value} color="error" />
  );
}

export function ProgressBarsDefense(props: any) {
  const value = props.defense;
  return (
    <BorderLinearProgress variant="determinate" value={value} color="primary" />
  );
}
export function ProgressBarsSpeed(props: any) {
  const value = props.speed;
  return (
    <BorderLinearProgress variant="determinate" value={value} color="warning" />
  );
}
export function ProgressBarsHeigth(props: any) {
  const value = props.heigth;
  return (
    <BorderLinearProgress
      variant="determinate"
      value={value}
      color="secondary"
    />
  );
}
export function ProgressBarsLife(props: any) {
  const value = props.life;
  return (
    <BorderLinearProgress variant="determinate" value={value} color="success" />
  );
}
