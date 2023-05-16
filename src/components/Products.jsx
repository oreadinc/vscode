import { For, createEffect, createSignal } from "solid-js"
import supabase from "../supabase/supabaseClients"
import Card from "./Card"


export default function Products() {

    const [smoothies, setSmoothies] = createSignal([])
    const [fetchError, setFetchError] = createSignal(null)


    createEffect( () => {
        const fetchSmoothies = async () => {
            const { data, error } = await supabase
                .from('smoothies')
                .select()
    
                if(error) {
                    setFetchError(error.message)
                }
                if(data) {
                    setFetchError(null)
                    setSmoothies(data)
                }
        }
        fetchSmoothies()
    })

    return (
        <div>
            {fetchError && (<p class="text-center text-red-300">{fetchError()}</p>)}
            <div class="grid grid-cols-3">
                <For each={smoothies()} class="grid grid-cols-3">
                    {(smoothie) => 
                        <Card key={smoothie.id} smoothie={smoothie} />
                    }
                </For>
            </div>
        </div>
    )
}