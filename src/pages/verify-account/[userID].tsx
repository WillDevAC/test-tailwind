import { NextPage } from "next";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { TUser } from "../../interfaces/user";
import { Layout } from "../../layout";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { api } from "../../services/api";

const VerifyAccount: NextPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState<TUser>({} as TUser);
  const [step, setStep] = useState(0);

  const data = {
    cpf: "",
    phone: "",
    birthDate: "",
    job: "",
    income: "",
    typeResidence: "",
  };

  const data2 = {
    freeTime: "",
    childAtHome: "",
    petAtHome: "",
    sex: "",
    fullAddress: "",
    cep: "",
  };

  useEffect(() => {
    if (isAuthenticated) {
      const credentials = localStorage.getItem("nextauth-credentials");
      const user: TUser = JSON.parse(credentials || "{}");
      setUser(user);
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: number
  ) => {
    console.log(event.target.value);

    if (type === 1) {
      data.cpf = event.target.value;
      return;
    }
    if (type === 2) {
      data.phone = event.target.value;
      return;
    }
    if (type === 3) {
      data.birthDate = event.target.value;
      return;
    }
    if (type === 4) {
      data.job = event.target.value;
      return;
    }
    if (type === 5) {
      data.income = event.target.value;
      return;
    }
    if (type === 6) {
      data.typeResidence = event.target.value;
      return;
    }
    if (type === 7) {
      data2.freeTime = event.target.value;
      return;
    }
    if (type === 8) {
      data2.childAtHome = event.target.value;
      return;
    }
    if (type === 9) {
      data2.petAtHome = event.target.value;
      return;
    }
    if (type === 10) {
      data2.sex = event.target.value;
      return;
    }
    if (type === 11) {
      data2.cep = event.target.value;
      return;
    }
    if (type === 11) {
      data2.fullAddress = event.target.value;
      return;
    }
  };

  const Step1 = () => {
    return (
      <>
        <InputMask
          className="shadow rounded w-full  py-2 px-3 text-black"
          type="text"
          placeholder="CPF"
          mask={"999.999.999-99"}
          onChange={(event) => handleChange(event, 1)}
        />
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Telefone"
          mask={"(99) 99999-9999"}
          onChange={(event) => handleChange(event, 2)}
        />
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Data de nascimento"
          mask={"99/99/9999"}
          onChange={(event) => handleChange(event, 3)}
        />
        <input
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Emprego/Profissão"
          onChange={(event) => handleChange(event, 4)}
        />
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Renda"
          mask={"9999"}
          onChange={(event) => handleChange(event, 5)}
        />
        <select
          className="shadow rounded w-full mt-5 py-2 px-3"
          placeholder="Tipo de residencia"
          onChange={(event) => handleChange(event, 6)}
        >
          <option disabled>Tipo de residência</option>
          <option value="Propria">Própria</option>
          <option value="Alugada">Alugada</option>
        </select>
      </>
    );
  };

  const Step2 = () => {
    return (
      <>
        <select className="shadow rounded w-full mt-5 py-2 px-3">
          <option disabled>Tempo livre</option>
          <option value={1}>Menos de 1 hora</option>
          <option value={2}>Entre 2 a 5 horas</option>
          <option value={5}>Mais de 5 horas</option>
        </select>
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Quantidade de crianças em casa"
          mask={"9"}
          onChange={(event) => handleChange(event, 8)}
        />
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Quantidade de animais em casa"
          mask={"9"}
          onChange={(event) => handleChange(event, 9)}
        />
        <select
          className="shadow rounded w-full mt-5 py-2 px-3"
          placeholder="Tipo de residencia"
          onChange={(event) => handleChange(event, 10)}
        >
          <option disabled>Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <InputMask
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="CEP"
          mask={"999999-999"}
          onChange={(event) => handleChange(event, 11)}
        />
        <input
          className="shadow rounded w-full mt-5 py-2 px-3 text-black"
          type="text"
          placeholder="Rua/Número"
          onChange={(event) => handleChange(event, 12)}
        />
      </>
    );
  };

  const Next = (step: number) => {
    if (step == 0) {
      if (
        data.cpf.length <= 0 ||
        data.phone.length <= 0 ||
        data.birthDate.length <= 0 ||
        data.job.length <= 0 ||
        data.income.length <= 0 ||
        data.typeResidence.length <= 0
      ) {
        toast.info("Preencha todos os dados.");
        console.log(data);
        return;
      } else {

        const tokenBearer = localStorage.getItem("nextauth-token");

        if(tokenBearer){
          api
          .put("/user/profile/update", {
            cpf: data.cpf,
            phone: data.phone,
            birthDate:  format(parseInt(data.birthDate), "yyyy/MM/dd"),
            job: data.job,
            income: data.income,
            typeResidence: data.typeResidence,
          },{
            headers: {
              Authorization: "Bearer " + tokenBearer,
            },
          })
          .then((response) => {
            console.log(response);
            setStep(1);
          });
        }
        return;
      }
    }

    if (step == 1) {
      if (
        data2.freeTime.length <= 0 ||
        data2.childAtHome.length <= 0 ||
        data2.petAtHome.length <= 0 ||
        data2.sex.length <= 0 ||
        data2.fullAddress.length <= 0
      ) {
        toast.info("Preencha todos os dados.");
        return;
      } else {

        const tokenBearer = localStorage.getItem("nextauth-token");

        if(tokenBearer) {
          api
          .put("/user/profile/update", {
            freeTime: data2.freeTime,
            childAtHome: data2.childAtHome,
            petAtHome: data2.petAtHome,
            sex: data2.sex,
            fullAddress: data2.fullAddress,
            cep: data2.cep,
          }, {
            headers: {
              Authorization: "Bearer " + tokenBearer,
            },
          })
          .then((response) => {
            console.log(response);
          });
        }
      }
    }
  };
  return (
    <Layout>
      <div className="w-full h-auto pt-10 flex justify-center items-center flex-col px-32">
        <div className="pt-5 font-bold text-xl flex">
          <div>
            <h1 className="text-3xl mb-5">
              Olá <b className="text-brand">{user.name}</b> vamos completar sua
              conta?
            </h1>
            <span className="text-lg font-extralight">
              Esse processo é rápido e prático, preencha com atenção os dados ao
              lado direito.
            </span>
          </div>
          <div className=" w-full text-slate-400 text-md">
            {step < 0 && <Step1 />}
            {step === 0 && <Step1 />}
            {step === 1 && <Step2 />}
            {step === 2 && <Step1 />}

            <div className="pt-5 flex items-center justify-end gap-5">
              <button
                className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Voltar
              </button>
              {step !== 2 ? (
                <button
                  className="bg-brand hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => Next(step)}
                >
                  Próximo
                </button>
              ) : (
                <button
                  className="bg-brand hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Finalizar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyAccount;
