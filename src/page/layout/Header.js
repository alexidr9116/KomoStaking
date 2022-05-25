import { Container, Stack } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import GradientButton from "../../component/GradientButton";
import TabMenu from "./TabMenu";

const ROUTERS = [
  {
    value: "Token Staking",
    path: "/token-staking",
    icon: './assets/token.svg',
  },
  {
    value: "NFT Staking",
    path: "/nft-staking",
    icon: './assets/nft.svg',
  }
]

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="px-2  z-50 bg-bg-2 border-b border-stone-300">
      <Stack spacing={2} direction="row" alignItems={"center"} justifyContent ="space-between" >
        <Stack spacing={2} direction="row" alignItems={"end"} >
          <Link to="/" className="mr-5 ">
            <img src="./assets/logo.svg" className="h-16 w-32" alt="logo" />
          </Link>

          <TabMenu routers={ROUTERS} />

        </Stack>
        <GradientButton text={'Connect Wallet'} />      
      </Stack>
    </div>
  );
}