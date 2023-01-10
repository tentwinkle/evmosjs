// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: ethermint/evm/v1/events.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace ethermint.evm.v1 {
    export class EventEthereumTx extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            amount?: string;
            eth_hash?: string;
            index?: string;
            gas_used?: string;
            hash?: string;
            recipient?: string;
            eth_tx_failed?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
                if ("eth_hash" in data && data.eth_hash != undefined) {
                    this.eth_hash = data.eth_hash;
                }
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
                if ("gas_used" in data && data.gas_used != undefined) {
                    this.gas_used = data.gas_used;
                }
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
                if ("recipient" in data && data.recipient != undefined) {
                    this.recipient = data.recipient;
                }
                if ("eth_tx_failed" in data && data.eth_tx_failed != undefined) {
                    this.eth_tx_failed = data.eth_tx_failed;
                }
            }
        }
        get amount() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set amount(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get eth_hash() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set eth_hash(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get index() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set index(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get gas_used() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set gas_used(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set hash(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get recipient() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set recipient(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get eth_tx_failed() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set eth_tx_failed(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            amount?: string;
            eth_hash?: string;
            index?: string;
            gas_used?: string;
            hash?: string;
            recipient?: string;
            eth_tx_failed?: string;
        }): EventEthereumTx {
            const message = new EventEthereumTx({});
            if (data.amount != null) {
                message.amount = data.amount;
            }
            if (data.eth_hash != null) {
                message.eth_hash = data.eth_hash;
            }
            if (data.index != null) {
                message.index = data.index;
            }
            if (data.gas_used != null) {
                message.gas_used = data.gas_used;
            }
            if (data.hash != null) {
                message.hash = data.hash;
            }
            if (data.recipient != null) {
                message.recipient = data.recipient;
            }
            if (data.eth_tx_failed != null) {
                message.eth_tx_failed = data.eth_tx_failed;
            }
            return message;
        }
        toObject() {
            const data: {
                amount?: string;
                eth_hash?: string;
                index?: string;
                gas_used?: string;
                hash?: string;
                recipient?: string;
                eth_tx_failed?: string;
            } = {};
            if (this.amount != null) {
                data.amount = this.amount;
            }
            if (this.eth_hash != null) {
                data.eth_hash = this.eth_hash;
            }
            if (this.index != null) {
                data.index = this.index;
            }
            if (this.gas_used != null) {
                data.gas_used = this.gas_used;
            }
            if (this.hash != null) {
                data.hash = this.hash;
            }
            if (this.recipient != null) {
                data.recipient = this.recipient;
            }
            if (this.eth_tx_failed != null) {
                data.eth_tx_failed = this.eth_tx_failed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.amount.length)
                writer.writeString(1, this.amount);
            if (this.eth_hash.length)
                writer.writeString(2, this.eth_hash);
            if (this.index.length)
                writer.writeString(3, this.index);
            if (this.gas_used.length)
                writer.writeString(4, this.gas_used);
            if (this.hash.length)
                writer.writeString(5, this.hash);
            if (this.recipient.length)
                writer.writeString(6, this.recipient);
            if (this.eth_tx_failed.length)
                writer.writeString(7, this.eth_tx_failed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventEthereumTx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventEthereumTx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.amount = reader.readString();
                        break;
                    case 2:
                        message.eth_hash = reader.readString();
                        break;
                    case 3:
                        message.index = reader.readString();
                        break;
                    case 4:
                        message.gas_used = reader.readString();
                        break;
                    case 5:
                        message.hash = reader.readString();
                        break;
                    case 6:
                        message.recipient = reader.readString();
                        break;
                    case 7:
                        message.eth_tx_failed = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventEthereumTx {
            return EventEthereumTx.deserialize(bytes);
        }
    }
    export class EventTxLog extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            tx_logs?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tx_logs" in data && data.tx_logs != undefined) {
                    this.tx_logs = data.tx_logs;
                }
            }
        }
        get tx_logs() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set tx_logs(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            tx_logs?: string[];
        }): EventTxLog {
            const message = new EventTxLog({});
            if (data.tx_logs != null) {
                message.tx_logs = data.tx_logs;
            }
            return message;
        }
        toObject() {
            const data: {
                tx_logs?: string[];
            } = {};
            if (this.tx_logs != null) {
                data.tx_logs = this.tx_logs;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.tx_logs.length)
                writer.writeRepeatedString(1, this.tx_logs);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventTxLog {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventTxLog();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventTxLog {
            return EventTxLog.deserialize(bytes);
        }
    }
    export class EventMessage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            module?: string;
            sender?: string;
            tx_type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("module" in data && data.module != undefined) {
                    this.module = data.module;
                }
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("tx_type" in data && data.tx_type != undefined) {
                    this.tx_type = data.tx_type;
                }
            }
        }
        get module() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set module(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get tx_type() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set tx_type(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            module?: string;
            sender?: string;
            tx_type?: string;
        }): EventMessage {
            const message = new EventMessage({});
            if (data.module != null) {
                message.module = data.module;
            }
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.tx_type != null) {
                message.tx_type = data.tx_type;
            }
            return message;
        }
        toObject() {
            const data: {
                module?: string;
                sender?: string;
                tx_type?: string;
            } = {};
            if (this.module != null) {
                data.module = this.module;
            }
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.tx_type != null) {
                data.tx_type = this.tx_type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.module.length)
                writer.writeString(1, this.module);
            if (this.sender.length)
                writer.writeString(2, this.sender);
            if (this.tx_type.length)
                writer.writeString(3, this.tx_type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventMessage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.module = reader.readString();
                        break;
                    case 2:
                        message.sender = reader.readString();
                        break;
                    case 3:
                        message.tx_type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventMessage {
            return EventMessage.deserialize(bytes);
        }
    }
    export class EventBlockBloom extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            bloom?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bloom" in data && data.bloom != undefined) {
                    this.bloom = data.bloom;
                }
            }
        }
        get bloom() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set bloom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            bloom?: string;
        }): EventBlockBloom {
            const message = new EventBlockBloom({});
            if (data.bloom != null) {
                message.bloom = data.bloom;
            }
            return message;
        }
        toObject() {
            const data: {
                bloom?: string;
            } = {};
            if (this.bloom != null) {
                data.bloom = this.bloom;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bloom.length)
                writer.writeString(1, this.bloom);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventBlockBloom {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventBlockBloom();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.bloom = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventBlockBloom {
            return EventBlockBloom.deserialize(bytes);
        }
    }
}