<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Container\Container as App;

class UserRepository extends BaseRepository
{
    public function __construct(App $app)
    {
        parent::__construct($app, new User());
    }

    
}
