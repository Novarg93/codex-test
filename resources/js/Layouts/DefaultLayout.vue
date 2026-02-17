<script lang="ts" setup>
import { ref, onMounted, nextTick, watch, } from "vue";
import { usePage } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3';
import { useCartSummary } from '@/composables/useCartSummary'
import { User as UserIcon } from "lucide-vue-next"
import axios from 'axios'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-vue-next";
import { ChevronsDown, Menu, X } from "lucide-vue-next";
import GlobalSearch from '@/components/GlobalSearch.vue'

const { summary, loadSummary } = useCartSummary()

function formatPrice(cents: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100)
}


const legalPages = usePage().props.legalPages as Array<{
    id: number
    name: string
    code: string
    url: string
}>

const user = usePage().props.auth.user
const isOpen = ref<boolean>(false);

onMounted(() => loadSummary())

</script>


<template>
    <div class="relative flex min-h-screen flex-col bg-[#111722] text-white">
        <div class="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#4A6CF7]/20 via-[#4A6CF7]/5 to-transparent"></div>
        <header
            class='sticky top-4 z-50 mx-auto mt-6 flex w-[90%] items-center justify-between rounded-sm border border-[#2E333D] bg-[#1D232D]/85 px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur md:px-6 2xl:w-[75%]'>
            <Link :href="route('home')" class="flex items-center text-lg font-semibold tracking-tight text-white">
            <ChevronsDown
                class="mr-2 h-9 w-9 rounded-sm border border-transparent bg-[#4A6CF7] p-1 text-white shadow-[0_8px_24px_rgba(74,108,247,0.45)]" />
            
            </Link>
            <!-- Mobile -->
            
            <Drawer direction="left" v-model:open="isOpen">
                <DrawerTrigger class="lg:hidden" as-child>
                    
                    <Button variant="ghost" class="h-10 w-10 rounded-full border border-[#414652] bg-[#222C40]/70 text-white hover:bg-[#4A6CF7]">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent
                    class="fixed inset-y-0 left-0 flex h-screen w-full max-w-sm flex-col justify-between rounded-none border-r border-[#2E333D] bg-[#111722] text-white sm:rounded-tr-sm sm:rounded-br-sm">
                    <div>

                        <DrawerHeader class="mx-4 my-6 rounded-sm border border-[#2E333D] bg-[#1D232D] p-3">
                            <DrawerTitle class="flex justify-between items-center">
                                <a href="/" class="flex items-center font-semibold text-white">
                                    <ChevronsDown
                                        class="mr-2 size-9 rounded-sm border border-transparent bg-[#4A6CF7] p-1 text-white" />
                                    ShadcnVue
                                </a>
                                <DrawerClose>
                                    <Button variant="ghost" class="h-10 w-10 rounded-full border border-[#414652] bg-[#222C40]/70 text-white hover:bg-[#4A6CF7]">
                                        <X />
                                    </Button>
                                </DrawerClose>
                            </DrawerTitle>

                            <DrawerDescription class="sr-only">
                                Navigation Menu
                            </DrawerDescription>
                        </DrawerHeader>
                        <div class="flex flex-col gap-3 px-6 text-base font-medium">
                            <Link :href="route('games.index')" class="rounded-sm border border-transparent px-3 py-[10px] text-[#79808A] transition hover:border-[#2E333D] hover:bg-[#1D232D] hover:text-[#4A6CF7]">Games</Link>
                            <Link :href="route('posts.index')" class="rounded-sm border border-transparent px-3 py-[10px] text-[#79808A] transition hover:border-[#2E333D] hover:bg-[#1D232D] hover:text-[#4A6CF7]">Blog</Link>
                            <Link :href="route('reviews.public')" class="rounded-sm border border-transparent px-3 py-[10px] text-[#79808A] transition hover:border-[#2E333D] hover:bg-[#1D232D] hover:text-[#4A6CF7]">Reviews</Link>
                            <Link :href="route('home')" class="rounded-sm border border-transparent px-3 py-[10px] text-[#79808A] transition hover:border-[#2E333D] hover:bg-[#1D232D] hover:text-[#4A6CF7]">Contact Us</Link>
                        </div>
                        <Separator class="my-6 bg-[#2E333D]" />
                        <div v-if="!$page.props.auth.user" class="flex flex-col gap-3 px-6 text-base font-medium">
                            <Link class="rounded-sm border border-[#2E333D] bg-transparent px-6 py-[10px] text-center text-[#79808A] transition hover:border-[#4A6CF7] hover:text-[#4A6CF7]" :href="route('login')">Login</Link>
                            <Link class="rounded-sm bg-[#4A6CF7] px-6 py-[10px] text-center font-semibold text-white transition hover:bg-[#4A6CF7]/90" :href="route('register')">Sign Up</Link>
                        </div>
                        <div v-if="$page.props.auth.user" class="flex flex-col px-6">
                            <Link class="rounded-sm border border-[#2E333D] bg-[#1D232D] px-6 py-[10px] text-center font-medium text-[#79808A] transition hover:border-[#4A6CF7] hover:text-[#4A6CF7]" :href="route('dashboard')">Dashboard</Link>
                        </div>
                    </div>

                </DrawerContent>
            </Drawer>

            

            <!-- Desktop -->
            <nav class="hidden lg:block">
                <ul class="flex items-center lg:space-x-10">
                    <li>
                        <Link class="text-sm font-medium text-[#79808A] transition hover:text-[#4A6CF7]" :href="route('games.index')">Games</Link>
                    </li>
                    <li>
                        <Link class="text-sm font-medium text-[#79808A] transition hover:text-[#4A6CF7]" :href="route('posts.index')">Blog</Link>
                    </li>
                    <li>
                        <Link class="text-sm font-medium text-[#79808A] transition hover:text-[#4A6CF7]" :href="route('reviews.public')">Reviews</Link>
                    </li>
                    <li>
                        <Link class="text-sm font-medium text-[#79808A] transition hover:text-[#4A6CF7]" :href="route('contact.show')">Contact Us</Link>
                    </li>
                    <GlobalSearch />
                    
                </ul>
            </nav>

            
            
            <div class="hidden gap-6 pr-2 lg:flex xl:pr-4">
                
                <div class="flex items-center gap-4 rounded-sm border border-[#2E333D] bg-[#222C40]/70 px-4 py-2">
                    <span v-if="summary.total_qty" class="text-sm font-medium text-[#79808A]">{{ formatPrice(summary.total_sum_cents) }}</span>
                    <a href="/cart" class="relative text-[#79808A] transition hover:text-[#4A6CF7]">

                        <span v-if="summary.total_qty"
                            class="absolute -right-2 -top-2 rounded-full bg-[#4A6CF7] px-2 py-0.5 text-xs text-white">
                            {{ summary.total_qty }}
                        </span>
                        <ShoppingCart />
                    </a>

                </div>
                <div v-if="!$page.props.auth.user" class="flex items-center justify-between gap-3">
                    <Link class="rounded-sm border border-[#2E333D] px-6 py-[10px] text-sm font-medium text-[#79808A] transition hover:border-[#4A6CF7] hover:text-[#4A6CF7]" :href="route('login')">Login</Link>
                    <Link class="rounded-sm bg-[#4A6CF7] px-6 py-[10px] text-sm font-semibold text-white transition hover:bg-[#4A6CF7]/90" :href="route('register')">Sign Up</Link>
                </div>
                <div v-if="$page.props.auth.user" class="flex justify-between items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            
                            <template v-if="user?.avatar_url">
                                <img :src="user.avatar_url" alt="User avatar"
                                    class="h-9 w-9 rounded-full border border-[#414652] object-cover" @error="$event.target.src = ''" />
                            </template>
                            <template v-else>
                                <div
                                    class="flex h-9 w-9 items-center justify-center rounded-full border border-[#414652] bg-[#222C40]/80 text-[#79808A] transition hover:text-[#4A6CF7]">
                                    <UserIcon />
                                </div>
                            </template>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="border border-[#2E333D] bg-[#1D232D] text-white">

                            <DropdownMenuLabel class="text-sm font-semibold text-white">My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator class="bg-[#2E333D]" />
                            <Link :href="route('dashboard')">
                            <DropdownMenuItem class="text-[#79808A] focus:bg-[#222C40] focus:text-[#4A6CF7]">
                                Dashboard


                            </DropdownMenuItem>
                            </Link>
                            <Link :href="route('orders.index')">
                            <DropdownMenuItem class="text-[#79808A] focus:bg-[#222C40] focus:text-[#4A6CF7]">
                                Orders

                            </DropdownMenuItem>
                            </Link>
                            <Link :href="route('profile.edit')">
                            <DropdownMenuItem class="text-[#79808A] focus:bg-[#222C40] focus:text-[#4A6CF7]">
                                Settings

                            </DropdownMenuItem>
                            </Link>
                            <Link class="w-full" :href="route('logout')" method="post" as="button">
                            <DropdownMenuItem class="w-full text-[#79808A] focus:bg-[#222C40] focus:text-[#4A6CF7]">
                                Logout

                            </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>

            </div>
        </header>


        <main class="relative z-10 flex-grow">
            <slot />
        </main>

        <footer
            class='mx-auto mb-10 w-[90%] rounded-sm border border-[#2E333D] bg-[#1D232D]/85 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur lg:p-8 2xl:w-[75%]'>
            <div class="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6">
                <div class="col-span-full xl:col-span-2">
                    <a href="#" class="flex items-center font-semibold text-white">
                        <ChevronsDown
                            class="mr-2 h-9 w-9 rounded-sm border border-transparent bg-[#4A6CF7] p-1 text-white" />

                        <h3 class="text-2xl">Shadcn-Vue</h3>
                    </a>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-lg font-semibold text-white">Contact</h3>
                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Github
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Twitter
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Instagram
                        </a>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-lg font-semibold text-white">Legal</h3>
                    <div v-for="p in legalPages" :key="p.id">
                        <Link :href="p.url" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                        {{ p.name }}
                        </Link>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-lg font-semibold text-white">Help</h3>
                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Contact Us
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            FAQ
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Feedback
                        </a>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-lg font-semibold text-white">Socials</h3>
                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Twitch
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Discord
                        </a>
                    </div>

                    <div>
                        <a href="#" class="text-sm text-[#79808A] transition hover:text-[#4A6CF7]">
                            Dribbble
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    </div>
    <Toaster theme="dark" rich-colors :visible-toasts="2"  />
</template>
