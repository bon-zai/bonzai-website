Text file: App.tsx
Latest content with line numbers:
1	import { Toaster } from "@/components/ui/sonner";
2	import { TooltipProvider } from "@/components/ui/tooltip";
3	import NotFound from "@/pages/NotFound";
4	import { Route, Switch } from "wouter";
5	import ErrorBoundary from "./components/ErrorBoundary";
6	import { ThemeProvider } from "./contexts/ThemeContext";
7	import Home from "./pages/Home";
8	
9	function Router() {
10	  return (
11	    <Switch>
12	      <Route path={"/"} component={Home} />
13	      <Route path={"/404"} component={NotFound} />
14	      {/* Final fallback route */}
15	      <Route component={NotFound} />
16	    </Switch>
17	  );
18	}
19	
20	function App() {
21	  return (
22	    <ErrorBoundary>
23	      <ThemeProvider defaultTheme="dark">
24	        <TooltipProvider>
25	          <Toaster />
26	          <Router />
27	        </TooltipProvider>
28	      </ThemeProvider>
29	    </ErrorBoundary>
30	  );
31	}
32	
33	export default App;
34	
35	