import BalanceCard from '../components/balance/Card'
import Spendings from '../components/spendings/Spendings'
import SepndingsCard from '../components/spendings/Card'

export default function Home() {
  return (
    <div className="bg-[#F8E9DD] min-h-screen min-w-screen flex flex-col items-center justify-center">
        <BalanceCard />
        <SepndingsCard />
    </div>
  )
}
