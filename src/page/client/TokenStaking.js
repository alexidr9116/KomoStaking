import { Box, Grid, Stack, Typography } from "@mui/material";
import GradientButton from "../../component/GradientButton";
import Page from "../../component/Page";

const PORTFOLIOS = [
    {
        durationKey: "Stake Amount/Duration",
        durationValue: "500 KOMO/7days",
        remainKey: "Remaining",
        remainValue: "5days",
        apyKey: "APY",
        apyValue: "50%",
        rewardKey: "Reward",
        rewardValue: "+0.52Komo",
    },
    {
        durationKey: "Stake Amount/Duration",
        durationValue: "500 KOMO/90days",
        remainKey: "Remaining",
        remainValue: "26days",
        apyKey: "APY",
        apyValue: "50%",
        rewardKey: "Reward",
        rewardValue: "+120.75Komo",
    },
    {
        durationKey: "Stake Amount/Duration",
        durationValue: "500 KOMO/365days",
        remainKey: "Remaining",
        remainValue: "342days",
        apyKey: "APY",
        apyValue: "50%",
        rewardKey: "Reward",
        rewardValue: "+10.75Komo",
    }
]
export default function TokenStaking() {
    return (
        <Page title="Token Staking" className="flex flex-col md:flex-row gap-4 p-8 lg:gap-8 lg:p-16 mb-10">
            <Grid container>
                <Grid item sm={4} xs={12} padding={2}  >
                    <Box sx={{ padding: 4, borderColor: '#FFFF00', borderWidth: 4, borderRadius: 8 }}>

                        <Typography sx={{ marginBottom: "1.5rem", fontSize: '1.3rem', fontWeight: "bold" }}>KOMO Token Staking</Typography>
                        <Typography sx={{ marginBottom: '0.5rem', fontSize: '0.8rem', marginLeft: "0.4rem" }} >Balance</Typography>
                        <Typography sx={{ marginBottom: "1.5rem", marginLeft: "0.4rem", fontSize: '1.3rem', fontWeight: "bold" }}>10,000 KOMO</Typography>
                        <Typography sx={{ marginBottom: '0.5rem', fontSize: '0.8rem', marginLeft: "0.4rem" }} >Stake Amount</Typography>
                        <div className="flex justify-between gap-2 items-end mb-4 ml-2">
                            <input className="input input-bordered input-sm rounded-none w-[150px] sm:w-full text-black"></input>
                            <label className="font-bold text-lg"> KOMO</label>
                        </div>
                        <Typography sx={{ marginBottom: "0.5rem", marginLeft: "0.4rem", fontSize: '0.8rem' }}>Duration</Typography>
                        <Grid container spacing={1} sx={{ marginBottom: "1.5rem" }}>
                            <Grid item xs={6}><GradientButton className='btn-sm w-full' text="7 days" /></Grid>
                            <Grid item xs={6}> <GradientButton className='btn-sm  w-full' text="14 days" disabled={true} /></Grid>
                            <Grid item xs={6}>
                                <GradientButton className='btn-sm  w-full' text="30 days" disabled={true} /></Grid>
                            <Grid item xs={6}>
                                <GradientButton className='btn-sm  w-full' text="90 days" disabled={true} /></Grid>
                            <Grid item xs={6}>
                                <GradientButton className='btn-sm  w-full' text="180 days" disabled={true} /></Grid>
                            <Grid item xs={6}>
                                <GradientButton className='btn-sm  w-full' text="365 days" disabled={true} /></Grid>

                        </Grid>
                        <Typography sx={{ fontSize: '0.8rem', marginLeft: "0.4rem" }} >APY</Typography>
                        <Typography sx={{ marginBottom: "1.5rem", marginLeft: "0.4rem", fontSize: '1.3rem', fontWeight: "bold" }}>50% APY</Typography>
                        <GradientButton className='w-full' text="Stake Token" />
                    </Box>
                </Grid>
                <Grid item sm={8} padding={2} xs={12} >
                    <Box sx={{ padding: 4, borderColor: '#FFFF00', borderWidth: 4, borderRadius: 6 ,height:"100%"}}>
                        <Typography sx={{ textAlign: "center", marginBottom: "1.5rem", fontSize: '1.3rem', fontWeight: "bold" }}>Portfolio</Typography>

                        {PORTFOLIOS.map((portofolio, index) => (
                            <div key ={index} className="flex flex-col md:flex-row w-full  border-b border-white p-2 items-center gap-2">
                                <div className="flex justify-between items-center gap-2 w-full">
                                    <Stack>
                                        <Typography sx={{ fontSize: "0.7rem" }}>{portofolio.durationKey}</Typography>
                                        <Typography  >{portofolio.durationValue}</Typography>
                                    </Stack>
                                    <Stack>
                                        <Typography sx={{ fontSize: "0.7rem" }}>{portofolio.remainKey}</Typography>
                                        <Typography >{portofolio.remainValue}</Typography>
                                    </Stack>
                                    <Stack>
                                        <Typography  sx={{ fontSize: "0.7rem" }}>{portofolio.apyKey}</Typography>
                                        <Typography  >{portofolio.apyValue}</Typography>
                                    </Stack>
                                    <Stack>
                                        <Typography  sx={{ fontSize: "0.7rem" }}>{portofolio.rewardKey}</Typography>
                                        <Typography  >{portofolio.rewardValue}</Typography>
                                    </Stack>
                                </div>
                                <div className="flex flex-col p-2">
                                    <GradientButton className={'btn-sm min-w-[120px] '} text={'Get Reward'} />
                                </div>
                            </div>

                        ))}
                    </Box>
                </Grid>

            </Grid>

        </Page >
    )
}