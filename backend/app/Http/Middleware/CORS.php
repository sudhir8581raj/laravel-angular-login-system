<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       // header("Access-Control-Allow-Origin: http://127.0.0.1:4200/");
        //header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token,Authorization, Origin");
        return $next($request);
    }
}
