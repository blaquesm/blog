import { Routes, Route } from 'react-router-dom';
import { Header } from './bff/components';
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;
//флексим, ориентируем по вертикали, растягиваем по вертикали, зададим ширину 1000пх, мин высоту, отцентруем

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;
const Footer = () => <div> Footer</div>;

export const Blog = () => {
	return (
		<AppColum>
			<Header />
			<Content>
				<H2> Контент страницы </H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColum>
	);
};
