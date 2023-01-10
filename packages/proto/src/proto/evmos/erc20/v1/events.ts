// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.8.0
 * source: evmos/erc20/v1/events.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace evmos.erc20.v1 {
    export class EventRegisterPair extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            denom?: string;
            erc20_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("erc20_address" in data && data.erc20_address != undefined) {
                    this.erc20_address = data.erc20_address;
                }
            }
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get erc20_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set erc20_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            denom?: string;
            erc20_address?: string;
        }): EventRegisterPair {
            const message = new EventRegisterPair({});
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.erc20_address != null) {
                message.erc20_address = data.erc20_address;
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: string;
                erc20_address?: string;
            } = {};
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.erc20_address != null) {
                data.erc20_address = this.erc20_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.denom.length)
                writer.writeString(1, this.denom);
            if (this.erc20_address.length)
                writer.writeString(2, this.erc20_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventRegisterPair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventRegisterPair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom = reader.readString();
                        break;
                    case 2:
                        message.erc20_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventRegisterPair {
            return EventRegisterPair.deserialize(bytes);
        }
    }
    export class EventToggleTokenConversion extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            denom?: string;
            erc20_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("erc20_address" in data && data.erc20_address != undefined) {
                    this.erc20_address = data.erc20_address;
                }
            }
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get erc20_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set erc20_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            denom?: string;
            erc20_address?: string;
        }): EventToggleTokenConversion {
            const message = new EventToggleTokenConversion({});
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.erc20_address != null) {
                message.erc20_address = data.erc20_address;
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: string;
                erc20_address?: string;
            } = {};
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.erc20_address != null) {
                data.erc20_address = this.erc20_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.denom.length)
                writer.writeString(1, this.denom);
            if (this.erc20_address.length)
                writer.writeString(2, this.erc20_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventToggleTokenConversion {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventToggleTokenConversion();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom = reader.readString();
                        break;
                    case 2:
                        message.erc20_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventToggleTokenConversion {
            return EventToggleTokenConversion.deserialize(bytes);
        }
    }
    export class EventConvertCoin extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sender?: string;
            receiver?: string;
            amount?: string;
            denom?: string;
            erc20_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("receiver" in data && data.receiver != undefined) {
                    this.receiver = data.receiver;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("erc20_address" in data && data.erc20_address != undefined) {
                    this.erc20_address = data.erc20_address;
                }
            }
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get receiver() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set receiver(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set amount(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get erc20_address() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set erc20_address(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            sender?: string;
            receiver?: string;
            amount?: string;
            denom?: string;
            erc20_address?: string;
        }): EventConvertCoin {
            const message = new EventConvertCoin({});
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.receiver != null) {
                message.receiver = data.receiver;
            }
            if (data.amount != null) {
                message.amount = data.amount;
            }
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.erc20_address != null) {
                message.erc20_address = data.erc20_address;
            }
            return message;
        }
        toObject() {
            const data: {
                sender?: string;
                receiver?: string;
                amount?: string;
                denom?: string;
                erc20_address?: string;
            } = {};
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.receiver != null) {
                data.receiver = this.receiver;
            }
            if (this.amount != null) {
                data.amount = this.amount;
            }
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.erc20_address != null) {
                data.erc20_address = this.erc20_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sender.length)
                writer.writeString(1, this.sender);
            if (this.receiver.length)
                writer.writeString(2, this.receiver);
            if (this.amount.length)
                writer.writeString(3, this.amount);
            if (this.denom.length)
                writer.writeString(4, this.denom);
            if (this.erc20_address.length)
                writer.writeString(5, this.erc20_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventConvertCoin {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventConvertCoin();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sender = reader.readString();
                        break;
                    case 2:
                        message.receiver = reader.readString();
                        break;
                    case 3:
                        message.amount = reader.readString();
                        break;
                    case 4:
                        message.denom = reader.readString();
                        break;
                    case 5:
                        message.erc20_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventConvertCoin {
            return EventConvertCoin.deserialize(bytes);
        }
    }
    export class EventConvertERC20 extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sender?: string;
            receiver?: string;
            amount?: string;
            denom?: string;
            contract_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("receiver" in data && data.receiver != undefined) {
                    this.receiver = data.receiver;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("contract_address" in data && data.contract_address != undefined) {
                    this.contract_address = data.contract_address;
                }
            }
        }
        get sender() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get receiver() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set receiver(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set amount(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set contract_address(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            sender?: string;
            receiver?: string;
            amount?: string;
            denom?: string;
            contract_address?: string;
        }): EventConvertERC20 {
            const message = new EventConvertERC20({});
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.receiver != null) {
                message.receiver = data.receiver;
            }
            if (data.amount != null) {
                message.amount = data.amount;
            }
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.contract_address != null) {
                message.contract_address = data.contract_address;
            }
            return message;
        }
        toObject() {
            const data: {
                sender?: string;
                receiver?: string;
                amount?: string;
                denom?: string;
                contract_address?: string;
            } = {};
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.receiver != null) {
                data.receiver = this.receiver;
            }
            if (this.amount != null) {
                data.amount = this.amount;
            }
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.contract_address != null) {
                data.contract_address = this.contract_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sender.length)
                writer.writeString(1, this.sender);
            if (this.receiver.length)
                writer.writeString(2, this.receiver);
            if (this.amount.length)
                writer.writeString(3, this.amount);
            if (this.denom.length)
                writer.writeString(4, this.denom);
            if (this.contract_address.length)
                writer.writeString(5, this.contract_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventConvertERC20 {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventConvertERC20();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sender = reader.readString();
                        break;
                    case 2:
                        message.receiver = reader.readString();
                        break;
                    case 3:
                        message.amount = reader.readString();
                        break;
                    case 4:
                        message.denom = reader.readString();
                        break;
                    case 5:
                        message.contract_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventConvertERC20 {
            return EventConvertERC20.deserialize(bytes);
        }
    }
}