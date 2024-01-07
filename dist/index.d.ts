import EditorJS, { BlockAddedMutationType, BlockRemovedMutationType, BlockMovedMutationType, BlockChangedMutationType } from '@editorjs/editorjs';
import { type SavedData } from '@editorjs/editorjs/types/data-formats/block-data';
import { type MakeConditionalType } from './UtilityTypes';
export type GroupCollabConfigOptions<SocketMethodName extends string> = {
    editor: EditorJS;
    socket: INeededSocketFields<SocketMethodName>;
    /**
     * Name of the socket event.
     * @default 'editorjs-update'
     */
    socketMethodName: SocketMethodName;
    /**
     * Delay to throttle block changes. Value is in ms
     * @default 300
     */
    blockChangeThrottleDelay: number;
};
export type MessageData = {
    block: SavedData;
} & (MakeConditionalType<{
    index: number;
}, typeof BlockAddedMutationType, 'type'> | MakeConditionalType<{
    blockId: string;
}, typeof BlockRemovedMutationType, 'type'> | MakeConditionalType<{
    blockId: string;
    index: number;
}, typeof BlockChangedMutationType, 'type'> | MakeConditionalType<{
    fromBlockId: string;
    toBlockId: string;
}, typeof BlockMovedMutationType, 'type'>);
export type INeededSocketFields<SocketMethodName extends string> = {
    send(socketMethod: SocketMethodName, data: MessageData): void;
    on(socketMethod: SocketMethodName, callback: (data: MessageData) => void): void;
    off(socketMethod: SocketMethodName): void;
};
export default class GroupCollab<SocketMethodName extends string> {
    private editor;
    private socket;
    private socketMethodName;
    private editorBlockEvent;
    private _isListening;
    private ignoreEvents;
    private blockChangeThrottleDelay;
    constructor({ editor, socket, socketMethodName, blockChangeThrottleDelay }: GroupCollabConfigOptions<SocketMethodName>);
    get isListening(): boolean;
    /**
     * Remove event listeners on socket and editor
     */
    unlisten(): void;
    /**
     * Manually listen for editor and socket events. This is called by default
     */
    listen(): void;
    private receiveChange;
    private blockListener;
    private initBlockChangeListener;
    private handleBlockChange?;
    private validateEventDetail;
    private addBlockToIgnorelist;
    private removeBlockFromIgnorelist;
}
