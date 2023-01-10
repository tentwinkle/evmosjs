// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: tendermint/types/evidence.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as dependency_2 from "./../../google/protobuf/timestamp";
import * as dependency_3 from "./types";
import * as dependency_4 from "./validator";
import * as pb_1 from "google-protobuf";
export namespace tendermint.types {
    export class Evidence extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            duplicate_vote_evidence?: DuplicateVoteEvidence;
            light_client_attack_evidence?: never;
        } | {
            duplicate_vote_evidence?: never;
            light_client_attack_evidence?: LightClientAttackEvidence;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("duplicate_vote_evidence" in data && data.duplicate_vote_evidence != undefined) {
                    this.duplicate_vote_evidence = data.duplicate_vote_evidence;
                }
                if ("light_client_attack_evidence" in data && data.light_client_attack_evidence != undefined) {
                    this.light_client_attack_evidence = data.light_client_attack_evidence;
                }
            }
        }
        get duplicate_vote_evidence() {
            return pb_1.Message.getWrapperField(this, DuplicateVoteEvidence, 1) as DuplicateVoteEvidence;
        }
        set duplicate_vote_evidence(value: DuplicateVoteEvidence) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_duplicate_vote_evidence() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get light_client_attack_evidence() {
            return pb_1.Message.getWrapperField(this, LightClientAttackEvidence, 2) as LightClientAttackEvidence;
        }
        set light_client_attack_evidence(value: LightClientAttackEvidence) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_light_client_attack_evidence() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get sum() {
            const cases: {
                [index: number]: "none" | "duplicate_vote_evidence" | "light_client_attack_evidence";
            } = {
                0: "none",
                1: "duplicate_vote_evidence",
                2: "light_client_attack_evidence"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            duplicate_vote_evidence?: ReturnType<typeof DuplicateVoteEvidence.prototype.toObject>;
            light_client_attack_evidence?: ReturnType<typeof LightClientAttackEvidence.prototype.toObject>;
        }): Evidence {
            const message = new Evidence({});
            if (data.duplicate_vote_evidence != null) {
                message.duplicate_vote_evidence = DuplicateVoteEvidence.fromObject(data.duplicate_vote_evidence);
            }
            if (data.light_client_attack_evidence != null) {
                message.light_client_attack_evidence = LightClientAttackEvidence.fromObject(data.light_client_attack_evidence);
            }
            return message;
        }
        toObject() {
            const data: {
                duplicate_vote_evidence?: ReturnType<typeof DuplicateVoteEvidence.prototype.toObject>;
                light_client_attack_evidence?: ReturnType<typeof LightClientAttackEvidence.prototype.toObject>;
            } = {};
            if (this.duplicate_vote_evidence != null) {
                data.duplicate_vote_evidence = this.duplicate_vote_evidence.toObject();
            }
            if (this.light_client_attack_evidence != null) {
                data.light_client_attack_evidence = this.light_client_attack_evidence.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_duplicate_vote_evidence)
                writer.writeMessage(1, this.duplicate_vote_evidence, () => this.duplicate_vote_evidence.serialize(writer));
            if (this.has_light_client_attack_evidence)
                writer.writeMessage(2, this.light_client_attack_evidence, () => this.light_client_attack_evidence.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Evidence {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Evidence();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.duplicate_vote_evidence, () => message.duplicate_vote_evidence = DuplicateVoteEvidence.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.light_client_attack_evidence, () => message.light_client_attack_evidence = LightClientAttackEvidence.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Evidence {
            return Evidence.deserialize(bytes);
        }
    }
    export class DuplicateVoteEvidence extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            vote_a?: dependency_3.tendermint.types.Vote;
            vote_b?: dependency_3.tendermint.types.Vote;
            total_voting_power?: number;
            validator_power?: number;
            timestamp?: dependency_2.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("vote_a" in data && data.vote_a != undefined) {
                    this.vote_a = data.vote_a;
                }
                if ("vote_b" in data && data.vote_b != undefined) {
                    this.vote_b = data.vote_b;
                }
                if ("total_voting_power" in data && data.total_voting_power != undefined) {
                    this.total_voting_power = data.total_voting_power;
                }
                if ("validator_power" in data && data.validator_power != undefined) {
                    this.validator_power = data.validator_power;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get vote_a() {
            return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.Vote, 1) as dependency_3.tendermint.types.Vote;
        }
        set vote_a(value: dependency_3.tendermint.types.Vote) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_vote_a() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get vote_b() {
            return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.Vote, 2) as dependency_3.tendermint.types.Vote;
        }
        set vote_b(value: dependency_3.tendermint.types.Vote) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_vote_b() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get total_voting_power() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set total_voting_power(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get validator_power() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set validator_power(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 5) as dependency_2.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            vote_a?: ReturnType<typeof dependency_3.tendermint.types.Vote.prototype.toObject>;
            vote_b?: ReturnType<typeof dependency_3.tendermint.types.Vote.prototype.toObject>;
            total_voting_power?: number;
            validator_power?: number;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): DuplicateVoteEvidence {
            const message = new DuplicateVoteEvidence({});
            if (data.vote_a != null) {
                message.vote_a = dependency_3.tendermint.types.Vote.fromObject(data.vote_a);
            }
            if (data.vote_b != null) {
                message.vote_b = dependency_3.tendermint.types.Vote.fromObject(data.vote_b);
            }
            if (data.total_voting_power != null) {
                message.total_voting_power = data.total_voting_power;
            }
            if (data.validator_power != null) {
                message.validator_power = data.validator_power;
            }
            if (data.timestamp != null) {
                message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            return message;
        }
        toObject() {
            const data: {
                vote_a?: ReturnType<typeof dependency_3.tendermint.types.Vote.prototype.toObject>;
                vote_b?: ReturnType<typeof dependency_3.tendermint.types.Vote.prototype.toObject>;
                total_voting_power?: number;
                validator_power?: number;
                timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.vote_a != null) {
                data.vote_a = this.vote_a.toObject();
            }
            if (this.vote_b != null) {
                data.vote_b = this.vote_b.toObject();
            }
            if (this.total_voting_power != null) {
                data.total_voting_power = this.total_voting_power;
            }
            if (this.validator_power != null) {
                data.validator_power = this.validator_power;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_vote_a)
                writer.writeMessage(1, this.vote_a, () => this.vote_a.serialize(writer));
            if (this.has_vote_b)
                writer.writeMessage(2, this.vote_b, () => this.vote_b.serialize(writer));
            if (this.total_voting_power != 0)
                writer.writeInt64(3, this.total_voting_power);
            if (this.validator_power != 0)
                writer.writeInt64(4, this.validator_power);
            if (this.has_timestamp)
                writer.writeMessage(5, this.timestamp, () => this.timestamp.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DuplicateVoteEvidence {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DuplicateVoteEvidence();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.vote_a, () => message.vote_a = dependency_3.tendermint.types.Vote.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.vote_b, () => message.vote_b = dependency_3.tendermint.types.Vote.deserialize(reader));
                        break;
                    case 3:
                        message.total_voting_power = reader.readInt64();
                        break;
                    case 4:
                        message.validator_power = reader.readInt64();
                        break;
                    case 5:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DuplicateVoteEvidence {
            return DuplicateVoteEvidence.deserialize(bytes);
        }
    }
    export class LightClientAttackEvidence extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            conflicting_block?: dependency_3.tendermint.types.LightBlock;
            common_height?: number;
            byzantine_validators?: dependency_4.tendermint.types.Validator[];
            total_voting_power?: number;
            timestamp?: dependency_2.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("conflicting_block" in data && data.conflicting_block != undefined) {
                    this.conflicting_block = data.conflicting_block;
                }
                if ("common_height" in data && data.common_height != undefined) {
                    this.common_height = data.common_height;
                }
                if ("byzantine_validators" in data && data.byzantine_validators != undefined) {
                    this.byzantine_validators = data.byzantine_validators;
                }
                if ("total_voting_power" in data && data.total_voting_power != undefined) {
                    this.total_voting_power = data.total_voting_power;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get conflicting_block() {
            return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.LightBlock, 1) as dependency_3.tendermint.types.LightBlock;
        }
        set conflicting_block(value: dependency_3.tendermint.types.LightBlock) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_conflicting_block() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get common_height() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set common_height(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get byzantine_validators() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.tendermint.types.Validator, 3) as dependency_4.tendermint.types.Validator[];
        }
        set byzantine_validators(value: dependency_4.tendermint.types.Validator[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get total_voting_power() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set total_voting_power(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 5) as dependency_2.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            conflicting_block?: ReturnType<typeof dependency_3.tendermint.types.LightBlock.prototype.toObject>;
            common_height?: number;
            byzantine_validators?: ReturnType<typeof dependency_4.tendermint.types.Validator.prototype.toObject>[];
            total_voting_power?: number;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): LightClientAttackEvidence {
            const message = new LightClientAttackEvidence({});
            if (data.conflicting_block != null) {
                message.conflicting_block = dependency_3.tendermint.types.LightBlock.fromObject(data.conflicting_block);
            }
            if (data.common_height != null) {
                message.common_height = data.common_height;
            }
            if (data.byzantine_validators != null) {
                message.byzantine_validators = data.byzantine_validators.map(item => dependency_4.tendermint.types.Validator.fromObject(item));
            }
            if (data.total_voting_power != null) {
                message.total_voting_power = data.total_voting_power;
            }
            if (data.timestamp != null) {
                message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            return message;
        }
        toObject() {
            const data: {
                conflicting_block?: ReturnType<typeof dependency_3.tendermint.types.LightBlock.prototype.toObject>;
                common_height?: number;
                byzantine_validators?: ReturnType<typeof dependency_4.tendermint.types.Validator.prototype.toObject>[];
                total_voting_power?: number;
                timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.conflicting_block != null) {
                data.conflicting_block = this.conflicting_block.toObject();
            }
            if (this.common_height != null) {
                data.common_height = this.common_height;
            }
            if (this.byzantine_validators != null) {
                data.byzantine_validators = this.byzantine_validators.map((item: dependency_4.tendermint.types.Validator) => item.toObject());
            }
            if (this.total_voting_power != null) {
                data.total_voting_power = this.total_voting_power;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_conflicting_block)
                writer.writeMessage(1, this.conflicting_block, () => this.conflicting_block.serialize(writer));
            if (this.common_height != 0)
                writer.writeInt64(2, this.common_height);
            if (this.byzantine_validators.length)
                writer.writeRepeatedMessage(3, this.byzantine_validators, (item: dependency_4.tendermint.types.Validator) => item.serialize(writer));
            if (this.total_voting_power != 0)
                writer.writeInt64(4, this.total_voting_power);
            if (this.has_timestamp)
                writer.writeMessage(5, this.timestamp, () => this.timestamp.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LightClientAttackEvidence {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LightClientAttackEvidence();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.conflicting_block, () => message.conflicting_block = dependency_3.tendermint.types.LightBlock.deserialize(reader));
                        break;
                    case 2:
                        message.common_height = reader.readInt64();
                        break;
                    case 3:
                        reader.readMessage(message.byzantine_validators, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_4.tendermint.types.Validator.deserialize(reader), dependency_4.tendermint.types.Validator));
                        break;
                    case 4:
                        message.total_voting_power = reader.readInt64();
                        break;
                    case 5:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LightClientAttackEvidence {
            return LightClientAttackEvidence.deserialize(bytes);
        }
    }
    export class EvidenceList extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            evidence?: Evidence[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
            }
        }
        get evidence() {
            return pb_1.Message.getRepeatedWrapperField(this, Evidence, 1) as Evidence[];
        }
        set evidence(value: Evidence[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            evidence?: ReturnType<typeof Evidence.prototype.toObject>[];
        }): EvidenceList {
            const message = new EvidenceList({});
            if (data.evidence != null) {
                message.evidence = data.evidence.map(item => Evidence.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                evidence?: ReturnType<typeof Evidence.prototype.toObject>[];
            } = {};
            if (this.evidence != null) {
                data.evidence = this.evidence.map((item: Evidence) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.evidence.length)
                writer.writeRepeatedMessage(1, this.evidence, (item: Evidence) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvidenceList {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvidenceList();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.evidence, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Evidence.deserialize(reader), Evidence));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EvidenceList {
            return EvidenceList.deserialize(bytes);
        }
    }
}
