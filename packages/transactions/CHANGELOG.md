# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.13](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.12...@evmos/transactions@0.2.13) (2023-01-22)

### Features

- support for generic grants ([#100](https://github.com/evmos/evmosjs/issues/100)) ([b622e15](https://github.com/evmos/evmosjs/commit/b622e15848622abf0ee26f76dfe4a3d3a849a514))

## [0.2.12](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.11...@evmos/transactions@0.2.12) (2022-11-14)

### Bug Fixes

- shx and link-module-alias change reverted ([#87](https://github.com/evmos/evmosjs/issues/87)) ([d4eeda5](https://github.com/evmos/evmosjs/commit/d4eeda59c8f5549d661e6bedd7a25df0b11afb9c))

### Features

- createValidator message ([#88](https://github.com/evmos/evmosjs/issues/88)) ([85df493](https://github.com/evmos/evmosjs/commit/85df493d5283b836e08aada2593f90c5fcfad516))

## [0.2.11](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.8...@evmos/transactions@0.2.11) (2022-11-11)

### Features

- governance MsgSubmitProposal ([#80](https://github.com/evmos/evmosjs/issues/80)) ([419bae1](https://github.com/evmos/evmosjs/commit/419bae1f6dbf1e4d1a77d83f50a358f4fc91708a))
- multiple delegations in just on transaction ([ed7df71](https://github.com/evmos/evmosjs/commit/ed7df719f4ab43c8c901fc88def74bfcb063abee))
- proposal deposit message ([#86](https://github.com/evmos/evmosjs/issues/86)) ([5410c1f](https://github.com/evmos/evmosjs/commit/5410c1fe042c13a77beb5629a07371dd905559de))
- support for MsgSetWithdrawAddress ([#75](https://github.com/evmos/evmosjs/issues/75)) ([a879799](https://github.com/evmos/evmosjs/commit/a879799f06e57b2959b6a0c9bc622f540e3d8920))
- vesting messages ([#85](https://github.com/evmos/evmosjs/issues/85)) ([ca75041](https://github.com/evmos/evmosjs/commit/ca750417ea7db5487de424d65d5d17517443ee01))

## [0.2.10](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.8...@evmos/transactions@0.2.10) (2022-10-10)

### Features

- multiple delegations in just on transaction ([ed7df71](https://github.com/evmos/evmosjs/commit/ed7df719f4ab43c8c901fc88def74bfcb063abee))
- support for MsgSetWithdrawAddress ([#75](https://github.com/evmos/evmosjs/issues/75)) ([a879799](https://github.com/evmos/evmosjs/commit/a879799f06e57b2959b6a0c9bc622f540e3d8920))

## [0.2.9](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.8...@evmos/transactions@0.2.9) (2022-10-06)

### Features

- support for MsgSetWithdrawAddress ([#75](https://github.com/evmos/evmosjs/issues/75)) ([a879799](https://github.com/evmos/evmosjs/commit/a879799f06e57b2959b6a0c9bc622f540e3d8920))

## 0.2.8 (2022-09-26)

### Features

- add feesplit to transactions pkg and eip712 rename ([#58](https://github.com/evmos/evmosjs/issues/58)) ([1dfefbd](https://github.com/evmos/evmosjs/commit/1dfefbd906a9674453c91c9adaf4273cc92c93b8))
- added multiple transactions support for withdraw rewards ([#26](https://github.com/evmos/evmosjs/issues/26)) ([9cddd62](https://github.com/evmos/evmosjs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))
- allow empty maxTokens on authz message ([#49](https://github.com/evmos/evmosjs/issues/49)) ([7a4a611](https://github.com/evmos/evmosjs/commit/7a4a611abd7b23bfb47c175e090ed7940e334305))
- authz for Staking Authorization added ([#47](https://github.com/evmos/evmosjs/issues/47)) ([0170a2d](https://github.com/evmos/evmosjs/commit/0170a2d9a889061e5d0d492a05b4f2a915701206))
- convertCoin and convertERC20 messages ([#45](https://github.com/evmos/evmosjs/issues/45)) ([9b78984](https://github.com/evmos/evmosjs/commit/9b78984c034208c572e519bf080073014e804f13))
- delegate message ([#15](https://github.com/evmos/evmosjs/issues/15)) ([1e68b10](https://github.com/evmos/evmosjs/commit/1e68b10d107edef6d54358447cee60af84d46053))
- evmos.me functions migration ([#10](https://github.com/evmos/evmosjs/issues/10)) ([c0fbd87](https://github.com/evmos/evmosjs/commit/c0fbd87f6979e07420daf7344ea392c284a878cd))
- feesplit renamed to revenue ([#73](https://github.com/evmos/evmosjs/issues/73)) ([75cc699](https://github.com/evmos/evmosjs/commit/75cc699fd318715d3f21da72ec83130ac858f661))
- ibc transactions added ([#14](https://github.com/evmos/evmosjs/issues/14)) ([3809f28](https://github.com/evmos/evmosjs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))
- redelegate/undelegate/claim transactions added ([#23](https://github.com/evmos/evmosjs/issues/23)) ([3b536c3](https://github.com/evmos/evmosjs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))
- use the same naming style across all packages ([#24](https://github.com/evmos/evmosjs/issues/24)) ([348db46](https://github.com/evmos/evmosjs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))
- utils to sign messages locally ([#44](https://github.com/evmos/evmosjs/issues/44)) ([80bdf98](https://github.com/evmos/evmosjs/commit/80bdf980a330630104155d37e4b1a289f94eb10c))
- vote on proposals ([#17](https://github.com/evmos/evmosjs/issues/17)) ([d0db5f9](https://github.com/evmos/evmosjs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))
- withdrawValidatorCommission message ([#42](https://github.com/evmos/evmosjs/issues/42)) ([9cc09e3](https://github.com/evmos/evmosjs/commit/9cc09e34f0f052555d1f9c6e8f3d81dfbbea6d1c))

## 0.2.7 (2022-09-12)

### Features

- add feesplit to transactions pkg and eip712 rename ([#58](https://github.com/evmos/evmosjs/issues/58)) ([1dfefbd](https://github.com/evmos/evmosjs/commit/1dfefbd906a9674453c91c9adaf4273cc92c93b8))
- added multiple transactions support for withdraw rewards ([#26](https://github.com/evmos/evmosjs/issues/26)) ([9cddd62](https://github.com/evmos/evmosjs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))
- allow empty maxTokens on authz message ([#49](https://github.com/evmos/evmosjs/issues/49)) ([7a4a611](https://github.com/evmos/evmosjs/commit/7a4a611abd7b23bfb47c175e090ed7940e334305))
- authz for Staking Authorization added ([#47](https://github.com/evmos/evmosjs/issues/47)) ([0170a2d](https://github.com/evmos/evmosjs/commit/0170a2d9a889061e5d0d492a05b4f2a915701206))
- convertCoin and convertERC20 messages ([#45](https://github.com/evmos/evmosjs/issues/45)) ([9b78984](https://github.com/evmos/evmosjs/commit/9b78984c034208c572e519bf080073014e804f13))
- delegate message ([#15](https://github.com/evmos/evmosjs/issues/15)) ([1e68b10](https://github.com/evmos/evmosjs/commit/1e68b10d107edef6d54358447cee60af84d46053))
- evmos.me functions migration ([#10](https://github.com/evmos/evmosjs/issues/10)) ([c0fbd87](https://github.com/evmos/evmosjs/commit/c0fbd87f6979e07420daf7344ea392c284a878cd))
- ibc transactions added ([#14](https://github.com/evmos/evmosjs/issues/14)) ([3809f28](https://github.com/evmos/evmosjs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))
- redelegate/undelegate/claim transactions added ([#23](https://github.com/evmos/evmosjs/issues/23)) ([3b536c3](https://github.com/evmos/evmosjs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))
- use the same naming style across all packages ([#24](https://github.com/evmos/evmosjs/issues/24)) ([348db46](https://github.com/evmos/evmosjs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))
- utils to sign messages locally ([#44](https://github.com/evmos/evmosjs/issues/44)) ([80bdf98](https://github.com/evmos/evmosjs/commit/80bdf980a330630104155d37e4b1a289f94eb10c))
- vote on proposals ([#17](https://github.com/evmos/evmosjs/issues/17)) ([d0db5f9](https://github.com/evmos/evmosjs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))
- withdrawValidatorCommission message ([#42](https://github.com/evmos/evmosjs/issues/42)) ([9cc09e3](https://github.com/evmos/evmosjs/commit/9cc09e34f0f052555d1f9c6e8f3d81dfbbea6d1c))

## [0.2.6](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.4...@evmos/transactions@0.2.6) (2022-08-23)

### Features

- add feesplit to transactions pkg and eip712 rename ([#58](https://github.com/evmos/evmosjs/issues/58)) ([1dfefbd](https://github.com/evmos/evmosjs/commit/1dfefbd906a9674453c91c9adaf4273cc92c93b8))
- allow empty maxTokens on authz message ([#49](https://github.com/evmos/evmosjs/issues/49)) ([7a4a611](https://github.com/evmos/evmosjs/commit/7a4a611abd7b23bfb47c175e090ed7940e334305))
- authz for Staking Authorization added ([#47](https://github.com/evmos/evmosjs/issues/47)) ([0170a2d](https://github.com/evmos/evmosjs/commit/0170a2d9a889061e5d0d492a05b4f2a915701206))

## [0.2.5](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.4...@evmos/transactions@0.2.5) (2022-07-19)

### Features

- authz for Staking Authorization added ([#47](https://github.com/evmos/evmosjs/issues/47)) ([0170a2d](https://github.com/evmos/evmosjs/commit/0170a2d9a889061e5d0d492a05b4f2a915701206))

## [0.2.4](https://github.com/evmos/evmosjs/compare/@evmos/transactions@0.2.3...@evmos/transactions@0.2.4) (2022-06-23)

### Features

- convertCoin and convertERC20 messages ([#45](https://github.com/evmos/evmosjs/issues/45)) ([9b78984](https://github.com/evmos/evmosjs/commit/9b78984c034208c572e519bf080073014e804f13))
- utils to sign messages locally ([#44](https://github.com/evmos/evmosjs/issues/44)) ([80bdf98](https://github.com/evmos/evmosjs/commit/80bdf980a330630104155d37e4b1a289f94eb10c))

## [0.2.3](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.2.2...@evmos/transactions@0.2.3) (2022-05-29)

### Features

- withdrawValidatorCommission message ([#42](https://github.com/tharsis/evmosjs/issues/42)) ([9cc09e3](https://github.com/tharsis/evmosjs/commit/9cc09e34f0f052555d1f9c6e8f3d81dfbbea6d1c))

## [0.2.2](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.2.1...@evmos/transactions@0.2.2) (2022-03-25)

**Note:** Version bump only for package @evmos/transactions

## [0.2.1](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.2.0...@evmos/transactions@0.2.1) (2022-03-14)

### Features

- added multiple transactions support for withdraw rewards ([#26](https://github.com/tharsis/evmosjs/issues/26)) ([9cddd62](https://github.com/tharsis/evmosjs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))

# [0.2.0](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.11...@evmos/transactions@0.2.0) (2022-03-11)

### Features

- use the same naming style across all packages ([#24](https://github.com/tharsis/evmosjs/issues/24)) ([348db46](https://github.com/tharsis/evmosjs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))

## [0.1.11](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.10...@evmos/transactions@0.1.11) (2022-03-11)

### Features

- redelegate/undelegate/claim transactions added ([#23](https://github.com/tharsis/evmosjs/issues/23)) ([3b536c3](https://github.com/tharsis/evmosjs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))

## [0.1.10](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.9...@evmos/transactions@0.1.10) (2022-03-09)

**Note:** Version bump only for package @evmos/transactions

## [0.1.9](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.8...@evmos/transactions@0.1.9) (2022-03-09)

**Note:** Version bump only for package @evmos/transactions

## [0.1.8](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.7...@evmos/transactions@0.1.8) (2022-03-09)

**Note:** Version bump only for package @evmos/transactions

## [0.1.7](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.6...@evmos/transactions@0.1.7) (2022-03-05)

### Features

- vote on proposals ([#17](https://github.com/tharsis/evmosjs/issues/17)) ([d0db5f9](https://github.com/tharsis/evmosjs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))

## [0.1.6](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.5...@evmos/transactions@0.1.6) (2022-03-04)

### Features

- delegate message ([#15](https://github.com/tharsis/evmosjs/issues/15)) ([1e68b10](https://github.com/tharsis/evmosjs/commit/1e68b10d107edef6d54358447cee60af84d46053))

## [0.1.5](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.4...@evmos/transactions@0.1.5) (2022-03-03)

**Note:** Version bump only for package @evmos/transactions

## [0.1.4](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.3...@evmos/transactions@0.1.4) (2022-03-03)

### Features

- ibc transactions added ([#14](https://github.com/tharsis/evmosjs/issues/14)) ([3809f28](https://github.com/tharsis/evmosjs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))

## [0.1.3](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.2...@evmos/transactions@0.1.3) (2022-03-03)

**Note:** Version bump only for package @evmos/transactions

## [0.1.2](https://github.com/tharsis/evmosjs/compare/@evmos/transactions@0.1.1...@evmos/transactions@0.1.2) (2022-03-02)

**Note:** Version bump only for package @evmos/transactions

## 0.1.1 (2022-03-02)

### Features

- evmos.me functions migration ([#10](https://github.com/tharsis/evmosjs/issues/10)) ([c0fbd87](https://github.com/tharsis/evmosjs/commit/c0fbd87f6979e07420daf7344ea392c284a878cd))
