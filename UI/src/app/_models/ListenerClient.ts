import { Device } from "./Device";

export interface ListenerClient {
    canBeFlashed: boolean;
    canBeReassigned: boolean;
    datetime_connected: number;
    datetime_inactive: number;
    deviceId: string;
    id: string;
    inactive: boolean;
    ipAddress: string;
    listenerType: string;
    socketId: string;
    // volatile
    device?: Device;
}