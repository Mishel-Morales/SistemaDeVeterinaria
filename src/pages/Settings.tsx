import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2, Check, Eye, EyeOff, User, Lock, Upload } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import validationSettings from "@/validations/Settings"
import validationPassword from "@/validations/SettingsPassword"

type ProfileFormValues = z.infer<typeof validationSettings>
type PasswordFormValues = z.infer<typeof validationPassword>
    

const Settings = () => {
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    })

    const [profileSuccess, setProfileSuccess] = useState(false)
    const [passwordSuccess, setPasswordSuccess] = useState(false)

    const profileForm = useForm<ProfileFormValues>({
        resolver: zodResolver(validationSettings),
        defaultValues: {
            firstName: "Juan",
            lastName: "Pérez",
            email: "juan.perez@ejemplo.com",
        },
    })

    const passwordForm = useForm<PasswordFormValues>({
        resolver: zodResolver(validationPassword),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    })

    const onProfileSubmit = async (data: ProfileFormValues) => {
        // Simular llamada a API
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setProfileSuccess(true)
        setTimeout(() => setProfileSuccess(false), 3000)
    }

    const onPasswordSubmit = async (data: PasswordFormValues) => {
        // Simular llamada a API
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setPasswordSuccess(true)
        passwordForm.reset()
        setTimeout(() => setPasswordSuccess(false), 3000)
    }

    return (
        <div className="p-8">
            <div className="mb-5 flex justify-between">
                <div>
                    <h1 className="font-display text-2xl font-bold tracking-tight">Configuración</h1>
                    <p className="text-sm text-muted-foreground">Personaliza tu experiencia y preferencias</p>
                </div>
            </div>
            <Tabs defaultValue="profile" className="max-w-2xl">
                <TabsList className="mb-4">
                    <TabsTrigger value="profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Perfil
                    </TabsTrigger>
                    <TabsTrigger value="password" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Contraseña
                    </TabsTrigger>
                </TabsList>
                {/* Profile Tab Content */}
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información del Perfil</CardTitle>
                            <CardDescription>Actualiza tu información personal</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-6 mb-4">
                                <Avatar className="h-25 w-25">
                                    <AvatarImage src="/placeholder.svg?key=55ude" />
                                    <AvatarFallback className="text-2xl">CL</AvatarFallback>
                                </Avatar>
                                <Button variant="outline" className="gap-2 bg-transparent">
                                    <Upload className="h-4 w-4" />
                                    Cambiar Foto
                                </Button>
                            </div>
                            <Form {...profileForm}>
                                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <FormField
                                            control={profileForm.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nombre</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={profileForm.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Apellido</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={profileForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Correo electrónico</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="email" disabled className="bg-muted" />
                                                </FormControl>
                                                <p className="text-xs text-muted-foreground">El correo electrónico no se puede cambiar</p>
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" disabled={profileForm.formState.isSubmitting || profileSuccess}>
                                        {profileForm.formState.isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Guardando...
                                            </>
                                        ) : profileSuccess ? (
                                            <>
                                                <Check className="mr-2 h-4 w-4" />
                                                Guardado
                                            </>
                                        ) : (
                                            "Guardar cambios"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </TabsContent>
                {/* Password Tab Content */}
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cambiar Contraseña</CardTitle>
                            <CardDescription>Ingresa tu contraseña actual para establecer una nueva</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...passwordForm}>
                                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                                    <FormField
                                        control={passwordForm.control}
                                        name="currentPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contraseña actual</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input {...field} type={showPasswords.current ? "text" : "password"} className="pr-10" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={passwordForm.control}
                                        name="newPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nueva contraseña</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input {...field} type={showPasswords.new ? "text" : "password"} className="pr-10" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={passwordForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirmar nueva contraseña</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Input {...field} type={showPasswords.confirm ? "text" : "password"} className="pr-10" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" disabled={passwordForm.formState.isSubmitting || passwordSuccess}>
                                        {passwordForm.formState.isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Actualizando...
                                            </>
                                        ) : passwordSuccess ? (
                                            <>
                                                <Check className="mr-2 h-4 w-4" />
                                                Contraseña actualizada
                                            </>
                                        ) : (
                                            "Cambiar contraseña"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
};

export default Settings;