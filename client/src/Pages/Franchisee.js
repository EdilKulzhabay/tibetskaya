import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import PageHeader from "../components/PageHeader";
import {
    Paper,
    Box,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent,
    DialogActions,
    SvgIcon,
} from "@mui/material";
import { ReactComponent as Close } from "../assets/icons/Close.svg";

export default function UserInfo() {
    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [mail, setMail] = useState("");

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const inputFileRef = useRef(null);
    const [iden, setIden] = useState();

    useEffect(() => {
        const formData = new FormData();
        formData.append("_id", id);

        api.post("/getFranchisee", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                setName(data.name);
                setPhone(data.phone);
                setWhatsapp(data.whatsapp);
                setMail(data.mail);
            })
            .catch((err) => {
                console.log(err);
            });

        api.post("/getProducts", { franchisee: id })
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateFranchisee = () => {
        const formData = new FormData();
        formData.append("_id", id);
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("whatsapp", whatsapp);
        formData.append("mail", mail);

        api.post("/updateFranchisee", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                console.log(data);
                setName(data.name);
                setPhone(data.phone);
                setWhatsapp(data.whatsapp);
                setMail(data.mail);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChangeFile = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", event.target.files[0]);
            api.post("/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(({ data }) => {
                    setImageUrl(data.url);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = () => {
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("imageUrl", imageUrl);
        formData.append("franchisee", id);

        api.post("/addProduct", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                setProductName("");
                setPrice("");
                setDescription("");
                setImageUrl("");
                setOpen(false);
                api.post("/getProducts", { franchisee: id })
                    .then(({ data }) => {
                        setProducts(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteProduct = (_id, fileName) => {
        const formData = new FormData();
        formData.append("_id", _id);
        formData.append("fileName", fileName);
        api.post("/deleteProduct", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                api.post("/getProducts", { franchisee: id })
                    .then(({ data }) => {
                        setProducts(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateProduct = (_id, fileName) => {
        const formData = new FormData();
        formData.append("_id", iden);
        formData.append("name", productName);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("imageUrl", imageUrl);
        api.post("/updateProduct", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                setUpdateOpen(false);
                api.post("/getProducts", { franchisee: id })
                    .then(({ data }) => {
                        setProducts(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth="xs"
                onClose={() => setOpen(false)}
            >
                <DialogTitle>
                    <div className="flex justify-end">
                        <IconButton
                            sx={{ ml: "auto" }}
                            onClick={() => setOpen(false)}
                        >
                            <SvgIcon component={Close} />
                        </IconButton>
                    </div>
                </DialogTitle>

                <DialogContent>
                    <div className="text-center text-[#2B3674] text-[24px] font-medium">
                        Добавить товар
                    </div>

                    <div className="text-center mt-1 text-[#2B3674] text-sm">
                        Введите данные товара
                    </div>
                    <Box component="form">
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"productName"}
                                label={"Название"}
                                fullWidth
                                autoFocus
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"price"}
                                label={"Цена"}
                                fullWidth
                                autoFocus
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"description"}
                                label={"Описание"}
                                fullWidth
                                autoFocus
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                        <div className="mt-6 flex justify-end">
                            {imageUrl && (
                                <div className="p-1 bg-gray-500">
                                    <img
                                        className="h-7"
                                        //src={`http://localhost:5000${imageUrl}`}
                                        src={`https://api.tibetskaya.kz${imageUrl}`}
                                        alt={productName}
                                    />
                                </div>
                            )}
                            <button
                                type="button"
                                className="ml-3 py-2 px-3 bg-[#5e00ff] rounded-md text-white hover:bg-[#5d00ffc0]"
                                onClick={() => inputFileRef.current.click()}
                            >
                                Добавить изображение
                            </button>
                            <input
                                ref={inputFileRef}
                                type="file"
                                onChange={handleChangeFile}
                                hidden
                            />
                        </div>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ justifyContent: "center" }}>
                    <button
                        onClick={addProduct}
                        className="py-2 text-sm px-3 rounded-lg font-medium border border-[#4318FF] bg-[#4318FF] text-white uppercase hover:bg-opacity-50 hover:text-#A3AED0"
                    >
                        Добавить
                    </button>
                    <button
                        onClick={() => {
                            setOpen(false);
                            setProductName("");
                            setPrice("");
                            setDescription("");
                            setImageUrl("");
                        }}
                        className="rounded-lg py-2 px-3 border border-[#A3AED0] text-[#A3AED0] text-sm font-mdeium uppercase hover:bg-gray-100"
                    >
                        Отменить
                    </button>
                </DialogActions>
            </Dialog>
            <PageHeader title="Франчайзи" sx={{ mb: 10 }}></PageHeader>
            <Paper className="rounded-2xl py-10 px-12 mt-7">
                <div className="grid grid-cols-2 gap-x-20 gap-y-7">
                    <Box>
                        <TextField
                            id={"name"}
                            label={"Имя"}
                            fullWidth
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            id={"phone"}
                            label={"Номер"}
                            fullWidth
                            autoFocus
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            id={"whatsapp"}
                            label={"Whatsapp"}
                            fullWidth
                            autoFocus
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            id={"mail"}
                            label={"Почта"}
                            fullWidth
                            autoFocus
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </Box>
                </div>

                <div className="flex justify-end mt-5">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={updateFranchisee}
                    >
                        Изменить
                    </Button>
                </div>
            </Paper>
            <PageHeader title="Товары" sx={{ mb: 10, mt: 10 }}></PageHeader>
            <Paper className="rounded-2xl py-10 px-12 mt-7">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Добавить товар
                </Button>
                {products && products.length > 0 ? (
                    <div className="mt-5 grid grid-cols-2 gap-x-14 gap-y-10">
                        {products.map((item) => (
                            <div
                                className="rounded-md shadow-lg text-center p-3"
                                key={item._id}
                            >
                                <div className="flex justify-center">
                                    <img
                                        className="max-h-[200px]"
                                        //src={`http://localhost:5000${item.imageUrl}`}
                                        src={`https://api.tibetskaya.kz${item.imageUrl}`}
                                        alt={item.name}
                                    />
                                </div>

                                <div className="mt-2 text-xl font-medium">
                                    {item.name}
                                </div>
                                <div className="mt-2 text-lg">{item.price}</div>
                                <div className="mt-2 text-lg">
                                    {item.description}
                                </div>
                                <div className="mt-4 flex gap-x-5 justify-end">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            setProductName(item.name);
                                            setPrice(item.price);
                                            setDescription(item.description);
                                            setImageUrl(item.imageUrl);
                                            setUpdateOpen(true);
                                            setIden(item._id);
                                        }}
                                    >
                                        Изменить
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        onClick={() => {
                                            deleteProduct(
                                                item._id,
                                                item.imageUrl
                                            );
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Товаров нет</div>
                )}
            </Paper>
            <Dialog
                open={updateOpen}
                fullWidth={true}
                maxWidth="xs"
                onClose={() => setUpdateOpen(false)}
            >
                <DialogTitle>
                    <div className="flex justify-end">
                        <IconButton
                            sx={{ ml: "auto" }}
                            onClick={() => setUpdateOpen(false)}
                        >
                            <SvgIcon component={Close} />
                        </IconButton>
                    </div>
                </DialogTitle>

                <DialogContent>
                    <div className="text-center text-[#2B3674] text-[24px] font-medium">
                        Изменить товар
                    </div>

                    <div className="text-center mt-1 text-[#2B3674] text-sm">
                        Введите данные товара
                    </div>
                    <Box component="form">
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"productName"}
                                label={"Название"}
                                fullWidth
                                autoFocus
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"price"}
                                label={"Цена"}
                                fullWidth
                                autoFocus
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mt: "24px" }}>
                            <TextField
                                id={"description"}
                                label={"Описание"}
                                fullWidth
                                autoFocus
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                        <div className="mt-6 flex justify-end">
                            {imageUrl && (
                                <div className="p-1 bg-gray-500">
                                    <img
                                        className="h-7"
                                        //src={`http://localhost:5000${imageUrl}`}
                                        src={`https://api.tibetskaya.kz${imageUrl}`}
                                        alt={productName}
                                    />
                                </div>
                            )}
                            <button
                                type="button"
                                className="ml-3 py-2 px-3 bg-[#5e00ff] rounded-md text-white hover:bg-[#5d00ffc0]"
                                onClick={() => inputFileRef.current.click()}
                            >
                                Добавить изображение
                            </button>
                            <input
                                ref={inputFileRef}
                                type="file"
                                onChange={handleChangeFile}
                                hidden
                            />
                        </div>
                    </Box>
                </DialogContent>

                <DialogActions sx={{ justifyContent: "center" }}>
                    <button
                        onClick={updateProduct}
                        className="py-2 text-sm px-3 rounded-lg font-medium border border-[#4318FF] bg-[#4318FF] text-white uppercase hover:bg-opacity-50 hover:text-#A3AED0"
                    >
                        Изменить
                    </button>
                    <button
                        onClick={() => {
                            setUpdateOpen(false);
                            setProductName("");
                            setPrice("");
                            setDescription("");
                            setImageUrl("");
                        }}
                        className="rounded-lg py-2 px-3 border border-[#A3AED0] text-[#A3AED0] text-sm font-mdeium uppercase hover:bg-gray-100"
                    >
                        Отменить
                    </button>
                </DialogActions>
            </Dialog>
        </>
    );
}
