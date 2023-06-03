import React, {FC, useState} from 'react';

import {useAppContext} from "../../context/ContextProvider";
import { AddContact } from './add-contact/AddContact';
import {MainBar} from "./main/MainBar";

export const SideBar: FC = () => {
    const {chats, setChats} = useAppContext()
    const [open, setOpen] = useState(false)

    return (
        <>
            {open ?
                (
                    <AddContact
                        setOpen={setOpen}
                        chats={chats}
                        setChats={setChats}
                    />
                ) :
                (
                    <MainBar
                        open={open}
                        setOpen={setOpen}
                        chats={chats}
                    />
                )
            }
        </>
    );
};
