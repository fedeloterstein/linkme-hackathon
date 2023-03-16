import { BigNumber } from 'ethers'
import { useContractRead } from 'wagmi'
import contractAbi from '../utils/contractABI.json'

export const useTotalDonationsByAddress = (ownedBy: string) => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x47B52e28d9831d95c31b6C14c6fe569357D4E995',
    abi: contractAbi.abi,
    functionName: 'getTotalDonationsByAddress',
    args: [ownedBy],
  })
  const totalDonationsByAddress: BigNumber = data as BigNumber

  return { totalDonationsByAddress, isError, isLoading }
}