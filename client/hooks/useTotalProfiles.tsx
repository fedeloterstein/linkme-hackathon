import { BigNumber } from 'ethers'
import React from 'react'
import { useContractRead } from 'wagmi'
import contractAbi from '../utils/contractABI.json'

export const useTotalProfiles = () => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x47B52e28d9831d95c31b6C14c6fe569357D4E995',
    abi: contractAbi.abi,
    functionName: 'totalProfiles',
  })
  console.log(data);
  
  const totalProfiles: BigNumber = data as BigNumber

  return { totalProfiles, isError, isLoading }
}