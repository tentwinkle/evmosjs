// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/authz/v1beta1/authz.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos_proto/cosmos";
import * as dependency_2 from "./../../../google/protobuf/timestamp";
import * as dependency_3 from "./../../../gogoproto/gogo";
import * as dependency_4 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.authz.v1beta1 {
    export class GenericAuthorization extends pb_1.Message {
        constructor(data?: any[] | {
            msg?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("msg" in data && data.msg != undefined) {
                    this.msg = data.msg;
                }
            }
        }
        get msg() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set msg(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            msg?: string;
        }) {
            const message = new GenericAuthorization({});
            if (data.msg != null) {
                message.msg = data.msg;
            }
            return message;
        }
        toObject() {
            const data: {
                msg?: string;
            } = {};
            if (this.msg != null) {
                data.msg = this.msg;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.msg === "string" && this.msg.length)
                writer.writeString(1, this.msg);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenericAuthorization {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenericAuthorization();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.msg = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenericAuthorization {
            return GenericAuthorization.deserialize(bytes);
        }
    }
    export class Grant extends pb_1.Message {
        constructor(data?: any[] | {
            authorization?: dependency_4.google.protobuf.Any;
            expiration?: dependency_2.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authorization" in data && data.authorization != undefined) {
                    this.authorization = data.authorization;
                }
                if ("expiration" in data && data.expiration != undefined) {
                    this.expiration = data.expiration;
                }
            }
        }
        get authorization() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Any, 1) as dependency_4.google.protobuf.Any;
        }
        set authorization(value: dependency_4.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get expiration() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2) as dependency_2.google.protobuf.Timestamp;
        }
        set expiration(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            authorization?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>;
            expiration?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }) {
            const message = new Grant({});
            if (data.authorization != null) {
                message.authorization = dependency_4.google.protobuf.Any.fromObject(data.authorization);
            }
            if (data.expiration != null) {
                message.expiration = dependency_2.google.protobuf.Timestamp.fromObject(data.expiration);
            }
            return message;
        }
        toObject() {
            const data: {
                authorization?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>;
                expiration?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.authorization != null) {
                data.authorization = this.authorization.toObject();
            }
            if (this.expiration != null) {
                data.expiration = this.expiration.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authorization !== undefined)
                writer.writeMessage(1, this.authorization, () => this.authorization.serialize(writer));
            if (this.expiration !== undefined)
                writer.writeMessage(2, this.expiration, () => this.expiration.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Grant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Grant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.authorization, () => message.authorization = dependency_4.google.protobuf.Any.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.expiration, () => message.expiration = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Grant {
            return Grant.deserialize(bytes);
        }
    }
}
