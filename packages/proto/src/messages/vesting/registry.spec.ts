import { vestingRegistryTypes } from './registry'

import {
  MsgClawback,
  MsgCreateClawbackVestingAccount,


describe('test vesting registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(vestingRegistryTypes).toStrictEqual([
      MsgClawback,
      MsgCreateClawbackVestingAccount,
      Period,
    ])
  })
})
