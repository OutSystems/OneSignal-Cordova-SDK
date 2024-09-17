
import * as Manager from '../src/outsystems/index'

describe("One Signal Manager: Notification Received Callback Tests", () => {
      
      it("if one received callback is registered, it should be called accordignly", () => {

            let mockCallback = jest.fn((num: number) => num++);

            Manager.setNotificationReceivedCallback(mockCallback);
            expect(mockCallback.mock.calls.length).toBe(0);

            Manager.notificationReceivedDelegate(0);

            expect(mockCallback).toHaveBeenCalledWith(0);
            expect(mockCallback.mock.calls.length).toBe(1);
      });

      it("if multiple received callback are registered, they should be called accordignly", () => {

            let mockCallback1 = jest.fn((num: number) => num++);
            let mockCallback2 = jest.fn((num: number) => num++);

            Manager.setNotificationReceivedCallback(mockCallback1);
            Manager.setNotificationReceivedCallback(mockCallback2);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(0);

            Manager.notificationReceivedDelegate(0);

            expect(mockCallback1.mock.calls.length).toBe(1);
            expect(mockCallback2.mock.calls.length).toBe(1);
            
            expect(mockCallback1).toHaveBeenCalledWith(0);
            expect(mockCallback2).toHaveBeenCalledWith(0);
      });

      it("if multiple received callback are registered, but one is removed, only one should be called", () => {

            let mockCallback1 = jest.fn((num: number) => num++);
            let mockCallback2 = jest.fn((num: number) => num++);

            Manager.setNotificationReceivedCallback(mockCallback1);
            Manager.setNotificationReceivedCallback(mockCallback2);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(0);

            Manager.unregisterReceivedCallback(mockCallback1);
            Manager.notificationReceivedDelegate(0);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(1);
            
            expect(mockCallback2).toHaveBeenCalledWith(0);
      });
     
});

describe("One Signal Manager: Notification Opened Callback Tests", () => {
      
      it("if one opened callback is registered, it should be called accordignly", () => {

            let mockCallback = jest.fn((num: number) => num++);

            Manager.setNotificationOpenedCallback(mockCallback);
            expect(mockCallback.mock.calls.length).toBe(0);

            Manager.notificationOpenedDelegate(0);

            expect(mockCallback).toHaveBeenCalledWith(0);
            expect(mockCallback.mock.calls.length).toBe(1);
      });

      it("if multiple Opened callback are registered, they should be called accordignly", () => {

            let mockCallback1 = jest.fn((num: number) => num++);
            let mockCallback2 = jest.fn((num: number) => num++);

            Manager.setNotificationOpenedCallback(mockCallback1);
            Manager.setNotificationOpenedCallback(mockCallback2);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(0);

            Manager.notificationOpenedDelegate(0);

            expect(mockCallback1.mock.calls.length).toBe(1);
            expect(mockCallback2.mock.calls.length).toBe(1);
            
            expect(mockCallback1).toHaveBeenCalledWith(0);
            expect(mockCallback2).toHaveBeenCalledWith(0);
      });

      it("if multiple Opened callback are registered, but one is removed, only one should be called", () => {

            let mockCallback1 = jest.fn((num: number) => num++);
            let mockCallback2 = jest.fn((num: number) => num++);

            Manager.setNotificationOpenedCallback(mockCallback1);
            Manager.setNotificationOpenedCallback(mockCallback2);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(0);

            Manager.unregisterOpenedCallback(mockCallback1);
            Manager.notificationOpenedDelegate(0);

            expect(mockCallback1.mock.calls.length).toBe(0);
            expect(mockCallback2.mock.calls.length).toBe(1);
            
            expect(mockCallback2).toHaveBeenCalledWith(0);
      });
     
});

describe("One Signal Manager: Both Callback Tests", () => {
      
      it("if both callbacks are registered, and only one is called, then it should work as expected", () => {

            let openCallback = jest.fn((num: number) => num++);
            let receivedCallback = jest.fn((num: number) => num++);

            Manager.setNotificationOpenedCallback(openCallback);
            Manager.setNotificationReceivedCallback(receivedCallback);

            expect(openCallback.mock.calls.length).toBe(0);
            expect(receivedCallback.mock.calls.length).toBe(0);

            Manager.notificationOpenedDelegate(0);

            expect(openCallback).toHaveBeenCalledWith(0);
            expect(openCallback.mock.calls.length).toBe(1);
            expect(receivedCallback.mock.calls.length).toBe(0);

            Manager.notificationReceivedDelegate(1);

            expect(receivedCallback).toHaveBeenCalledWith(1);
            expect(receivedCallback.mock.calls.length).toBe(1);
            expect(openCallback.mock.calls.length).toBe(1);
      });
     
});