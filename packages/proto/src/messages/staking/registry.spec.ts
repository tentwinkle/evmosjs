import { stakingRegistryTypes } from './registry'

import {
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgEditValidator,
  MsgCreateValidator,


describe('test staking registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(stakingRegistryTypes).toStrictEqual([
      MsgDelegate,
      MsgBeginRedelegate,
      MsgUndelegate,
      MsgCancelUnbondingDelegation,
      MsgEditValidator,
      MsgCreateValidator,
      Description,
      CommissionRates,
    ])
  })
})
