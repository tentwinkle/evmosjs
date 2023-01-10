// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: evmos/incentives/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./incentives";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace evmos.incentives.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: Params;
            incentives?: dependency_1.evmos.incentives.v1.Incentive[];
            gas_meters?: dependency_1.evmos.incentives.v1.GasMeter[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("incentives" in data && data.incentives != undefined) {
                    this.incentives = data.incentives;
                }
                if ("gas_meters" in data && data.gas_meters != undefined) {
                    this.gas_meters = data.gas_meters;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, Params, 1) as Params;
        }
        set params(value: Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get incentives() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.evmos.incentives.v1.Incentive, 2) as dependency_1.evmos.incentives.v1.Incentive[];
        }
        set incentives(value: dependency_1.evmos.incentives.v1.Incentive[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get gas_meters() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.evmos.incentives.v1.GasMeter, 3) as dependency_1.evmos.incentives.v1.GasMeter[];
        }
        set gas_meters(value: dependency_1.evmos.incentives.v1.GasMeter[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            incentives?: ReturnType<typeof dependency_1.evmos.incentives.v1.Incentive.prototype.toObject>[];
            gas_meters?: ReturnType<typeof dependency_1.evmos.incentives.v1.GasMeter.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = Params.fromObject(data.params);
            }
            if (data.incentives != null) {
                message.incentives = data.incentives.map(item => dependency_1.evmos.incentives.v1.Incentive.fromObject(item));
            }
            if (data.gas_meters != null) {
                message.gas_meters = data.gas_meters.map(item => dependency_1.evmos.incentives.v1.GasMeter.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof Params.prototype.toObject>;
                incentives?: ReturnType<typeof dependency_1.evmos.incentives.v1.Incentive.prototype.toObject>[];
                gas_meters?: ReturnType<typeof dependency_1.evmos.incentives.v1.GasMeter.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.incentives != null) {
                data.incentives = this.incentives.map((item: dependency_1.evmos.incentives.v1.Incentive) => item.toObject());
            }
            if (this.gas_meters != null) {
                data.gas_meters = this.gas_meters.map((item: dependency_1.evmos.incentives.v1.GasMeter) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.incentives.length)
                writer.writeRepeatedMessage(2, this.incentives, (item: dependency_1.evmos.incentives.v1.Incentive) => item.serialize(writer));
            if (this.gas_meters.length)
                writer.writeRepeatedMessage(3, this.gas_meters, (item: dependency_1.evmos.incentives.v1.GasMeter) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.incentives, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.evmos.incentives.v1.Incentive.deserialize(reader), dependency_1.evmos.incentives.v1.Incentive));
                        break;
                    case 3:
                        reader.readMessage(message.gas_meters, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.evmos.incentives.v1.GasMeter.deserialize(reader), dependency_1.evmos.incentives.v1.GasMeter));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            enable_incentives?: boolean;
            allocation_limit?: string;
            incentives_epoch_identifier?: string;
            reward_scaler?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("enable_incentives" in data && data.enable_incentives != undefined) {
                    this.enable_incentives = data.enable_incentives;
                }
                if ("allocation_limit" in data && data.allocation_limit != undefined) {
                    this.allocation_limit = data.allocation_limit;
                }
                if ("incentives_epoch_identifier" in data && data.incentives_epoch_identifier != undefined) {
                    this.incentives_epoch_identifier = data.incentives_epoch_identifier;
                }
                if ("reward_scaler" in data && data.reward_scaler != undefined) {
                    this.reward_scaler = data.reward_scaler;
                }
            }
        }
        get enable_incentives() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set enable_incentives(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get allocation_limit() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set allocation_limit(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get incentives_epoch_identifier() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set incentives_epoch_identifier(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get reward_scaler() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set reward_scaler(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            enable_incentives?: boolean;
            allocation_limit?: string;
            incentives_epoch_identifier?: string;
            reward_scaler?: string;
        }): Params {
            const message = new Params({});
            if (data.enable_incentives != null) {
                message.enable_incentives = data.enable_incentives;
            }
            if (data.allocation_limit != null) {
                message.allocation_limit = data.allocation_limit;
            }
            if (data.incentives_epoch_identifier != null) {
                message.incentives_epoch_identifier = data.incentives_epoch_identifier;
            }
            if (data.reward_scaler != null) {
                message.reward_scaler = data.reward_scaler;
            }
            return message;
        }
        toObject() {
            const data: {
                enable_incentives?: boolean;
                allocation_limit?: string;
                incentives_epoch_identifier?: string;
                reward_scaler?: string;
            } = {};
            if (this.enable_incentives != null) {
                data.enable_incentives = this.enable_incentives;
            }
            if (this.allocation_limit != null) {
                data.allocation_limit = this.allocation_limit;
            }
            if (this.incentives_epoch_identifier != null) {
                data.incentives_epoch_identifier = this.incentives_epoch_identifier;
            }
            if (this.reward_scaler != null) {
                data.reward_scaler = this.reward_scaler;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.enable_incentives != false)
                writer.writeBool(1, this.enable_incentives);
            if (this.allocation_limit.length)
                writer.writeString(2, this.allocation_limit);
            if (this.incentives_epoch_identifier.length)
                writer.writeString(3, this.incentives_epoch_identifier);
            if (this.reward_scaler.length)
                writer.writeString(4, this.reward_scaler);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.enable_incentives = reader.readBool();
                        break;
                    case 2:
                        message.allocation_limit = reader.readString();
                        break;
                    case 3:
                        message.incentives_epoch_identifier = reader.readString();
                        break;
                    case 4:
                        message.reward_scaler = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
