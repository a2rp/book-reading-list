import About from './components/about'
import BookReadingList from './components/bookReadingList'
import ScrollToTopButton from './components/scrollToTopButton'

const App = () => {
    return (
        <>
            <BookReadingList />
            <About />
            <ScrollToTopButton />
        </>
    )
}

export default App