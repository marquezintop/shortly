--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    id_usuario integer NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    name text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, url, short_url, visit_count, id_usuario, createdat) FROM stdin;
5	https://www.youtube.com/watch?v=9eqXuQuM1EI	c-VmzmsiFXBXX2vNPfhXj	0	2	2023-05-19 00:18:07.200674
4	https://www.youtube.com/watch?v=9eqXuQuM1EI	hSM83pLrBzsLPHF5mBDtD	1	1	2023-05-19 00:17:40.000888
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, createdat, name) FROM stdin;
1	patrick@teste.com	$2b$10$.he4JqtxpEyv1ubVyt6X2.umArgPhZKaYlzGmrwtq4Ij949Oe44ka	2023-05-18 14:58:16.114241	Patrick
2	patrick@teste2.com	$2b$10$NJ2OB6RRafU1oWXFKpNuTewRLHLtWXPmr.qJqNUei24SuBptHl3Ke	2023-05-18 23:24:08.953591	Patrick
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--
