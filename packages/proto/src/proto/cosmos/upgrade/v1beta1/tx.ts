// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: cosmos/upgrade/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../cosmos_proto/cosmos";
import * as dependency_3 from "./upgrade";
import * as dependency_4 from "./../../msg/v1/msg";
import * as pb_1 from "google-protobuf";
export namespace cosmos.upgrade.v1beta1 {
    export class MsgSoftwareUpgrade extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
            plan?: dependency_3.cosmos.upgrade.v1beta1.Plan;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("plan" in data && data.plan != undefined) {
                    this.plan = data.plan;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get plan() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.Plan, 2) as dependency_3.cosmos.upgrade.v1beta1.Plan;
        }
        set plan(value: dependency_3.cosmos.upgrade.v1beta1.Plan) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_plan() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            authority?: string;
            plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
        }): MsgSoftwareUpgrade {
            const message = new MsgSoftwareUpgrade({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.plan != null) {
                message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.fromObject(data.plan);
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
                plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.plan != null) {
                data.plan = this.plan.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (this.has_plan)
                writer.writeMessage(2, this.plan, () => this.plan.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSoftwareUpgrade {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSoftwareUpgrade();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.plan, () => message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSoftwareUpgrade {
            return MsgSoftwareUpgrade.deserialize(bytes);
        }
    }
    export class MsgSoftwareUpgradeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgSoftwareUpgradeResponse {
            const message = new MsgSoftwareUpgradeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSoftwareUpgradeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSoftwareUpgradeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSoftwareUpgradeResponse {
            return MsgSoftwareUpgradeResponse.deserialize(bytes);
        }
    }
    export class MsgCancelUpgrade extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            authority?: string;
        }): MsgCancelUpgrade {
            const message = new MsgCancelUpgrade({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelUpgrade {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelUpgrade();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCancelUpgrade {
            return MsgCancelUpgrade.deserialize(bytes);
        }
    }
    export class MsgCancelUpgradeResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgCancelUpgradeResponse {
            const message = new MsgCancelUpgradeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelUpgradeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelUpgradeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCancelUpgradeResponse {
            return MsgCancelUpgradeResponse.deserialize(bytes);
        }
    }
}