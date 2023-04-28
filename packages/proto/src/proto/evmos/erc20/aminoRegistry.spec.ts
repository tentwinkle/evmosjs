import { createERC20AminoConverters } from './aminoRegistry'
import { MsgConvertCoin, MsgConvertERC20 } from './tx'
import { createAminoConverter } from '../../../amino/objectConverter'
import { expectEqualDefaultAminoConverters } from '../../../../testutils/compareAminoRegistry'

describe('test erc20 amino converters', () => {
  it('creates expected converter for MsgConvertCoin', () => {
    const aminoConverters = createERC20AminoConverters()
    const expAminoConverters = {
      ...createAminoConverter(MsgConvertCoin, 'evmos/MsgConvertCoin'),
      ...createAminoConverter(MsgConvertERC20, 'evmos/MsgConvertERC20'),
    }

    expectEqualDefaultAminoConverters(aminoConverters, expAminoConverters)
  })
})
