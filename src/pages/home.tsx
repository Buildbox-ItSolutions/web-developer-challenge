import { ReactElement } from 'react'
import ButtonPattern from '../components/Button'
import Card from '../components/Card'
import CardDescription from '../components/CardDescription'
import Container from '../components/Container'
import ImagePreview from '../components/imagePreview'
import { InputText, InputTextArea } from '../components/Input/index'
import Navbar from '../components/Navbar'
import useHome, { dataProps } from '../hooks/useHome'

function Home() {
    const { selectedImage, setSelectedImage, register, handleSubmit, deleteGallery, errors, saveData, cleanup, state } = useHome()

    return (
        <>
            <Navbar />
            <Container>
                <Card>
                    <ImagePreview selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                    <InputText
                        errors={errors}
                        label="Nome"
                        name="name"
                        placeholder="Adicione o seu nome"
                        register={register}
                        required
                        type="text"
                    />
                    <InputTextArea
                        errors={errors}
                        label="Descrição"
                        name="description"
                        placeholder="Adicione uma descrição"
                        register={register}
                        required
                        type="text"
                    />

                    <ButtonPattern background onClick={handleSubmit(saveData)}>
                        Salvar
                    </ButtonPattern>
                    <ButtonPattern onClick={cleanup} type="button">
                        Descartar
                    </ButtonPattern>
                </Card>
                <div>
                    {state?.galleries?.map((item: dataProps, index: any): ReactElement => {
                        return (
                            <>
                                <CardDescription
                                    id={item.id}
                                    key={index}
                                    description={item?.description}
                                    name={item?.name}
                                    image={item?.image}
                                    onDelete={deleteGallery}
                                />
                            </>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default Home
