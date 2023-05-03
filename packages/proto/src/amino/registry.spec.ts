import { Message, AnyMessage } from '@bufbuild/protobuf'
import { AminoTypes } from './registry'
import {
  createMsgSend,
  createMsgClawback,
  createMsgRegisterRevenue,
} from '../messages'
import { convertProtoMessageToObject } from './objectConverter'

import { MessageGenerated } from '../messages/common'
import { from, to, to2, hex, amount, denom } from '../proto/tests/utils'

function expectReversibleAminoConversion<T extends Message<T> = AnyMessage>(
  wrappedProtoMsg: MessageGenerated<T>,
) {
  const protoObject = convertProtoMessageToObject(wrappedProtoMsg.message)
  const aminoObject = AminoTypes.toAmino(protoObject)
  const reconstructedProtoObject = AminoTypes.fromAmino(aminoObject)

  expect(reconstructedProtoObject).toStrictEqual(protoObject)
}

describe('test generated amino types', () => {
  it('converts registered cosmos messages', () => {
    const wrappedProtoMsgSend = createMsgSend(from, to, amount, denom)
    expectReversibleAminoConversion(wrappedProtoMsgSend)
  })

  it('converts registered evmos messages', () => {
    const wrappedProtoMsgClawback = createMsgClawback(from, to, to2)
    expectReversibleAminoConversion(wrappedProtoMsgClawback)

    const revenueNonces = [8, 16]
    const wrappedProtoMsgRegisterRevenue = createMsgRegisterRevenue(
      hex,
      from,
      to,
      revenueNonces,
    )
    expectReversibleAminoConversion(wrappedProtoMsgRegisterRevenue)
  })
})
